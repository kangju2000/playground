import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import type { GatsbyNode } from 'gatsby';

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/post.tsx`);

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result: {
    errors?: any;
    data?: {
      allMarkdownRemark: {
        edges: {
          node: {
            id: string;
            fields: {
              slug: string;
            };
          };
          next: {
            fields: {
              slug: string;
            };
          };
          previous: {
            fields: {
              slug: string;
            };
          };
        }[];
      };
    };
  } = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  const edges = result.data.allMarkdownRemark.edges;

  edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        id: node.id,
        previousPostId: previous.fields.slug ?? '',
        nextPostId: next.fields.slug ?? '',
      },
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  plugins,
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
};
