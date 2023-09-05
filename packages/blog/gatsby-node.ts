import path from 'path';
import readingTime from 'reading-time';

import type { AllMdx } from './src/types';
import type { Actions, GatsbyNode } from 'gatsby';

interface CreatePostsProps {
  createPage: Actions['createPage'];
  nodes: AllMdx['nodes'];
}

const createPosts = async ({ createPage, nodes }: CreatePostsProps) => {
  const posts = path.resolve(`./src/templates/AllPostPage/index.tsx`);

  const categorySet = new Set(['All']);

  const edgesWithMap = nodes.map((node) => {
    const { categories } = node.frontmatter;
    const categoriesArr = categories.split(' ');
    const categoriesMap = categoriesArr.reduce(
      (acc, category) => {
        acc[category] = true;
        return acc;
      },
      {} as Record<string, boolean>
    );

    return { ...node, categoriesMap };
  });

  edgesWithMap.forEach((edge) => {
    const postCategories = Object.keys(edge.categoriesMap);
    postCategories.forEach((category) => category !== 'featured' && categorySet.add(category));
  });

  const categories = [...categorySet];

  createPage({
    path: `/categories`,
    component: posts,
    context: { currentCategory: 'All', nodes, categories },
  });

  categories.forEach((currentCategory) => {
    createPage({
      path: `/categories/${currentCategory}`,
      component: posts,
      context: {
        currentCategory,
        categories,
        nodes: edgesWithMap.filter((edge) => edge.categoriesMap[currentCategory]),
      },
    });
  });
};

const createPost = async ({ createPage, nodes }: CreatePostsProps) => {
  const post = path.resolve(`./src/templates/PostPage/index.tsx`);

  nodes.forEach((node) => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: `${post.trim()}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
        readingTime: readingTime(node.body),
      },
    });
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result: {
    errors?: Error;
    data?: {
      allPosts: AllMdx;
    };
  } = await graphql(`
    query {
      allPosts: allMdx {
        nodes {
          id
          body
          excerpt(pruneLength: 500)
          frontmatter {
            slug
            categories
            title
            createdAt
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  const nodes = result.data.allPosts.nodes;

  createPosts({ createPage, nodes });
  createPost({ createPage, nodes });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string),
    });
  }
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  plugins,
  reporter,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      plugins.provide({
        React: 'react',
      }),
    ],
  });

  reporter.info('webpack config is updated');
};
