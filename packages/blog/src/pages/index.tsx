import { type PageProps, graphql } from 'gatsby';

import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { AllMdx } from '@/types';

interface IndexProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMdx: AllMdx;
}

const Index = ({ data, location }: PageProps<IndexProps>) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout location={location}>
      {posts.map(({ mdxContent }) => {
        const title = mdxContent.frontmatter.title || mdxContent.frontmatter.slug;
        return (
          <Card
            key={mdxContent.id}
            title={title}
            date={mdxContent.frontmatter.createdAt}
            excerpt={mdxContent.excerpt}
            slug={mdxContent.frontmatter.slug}
          />
        );
      })}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          slug
          title
          createdAt
          categories
        }
      }
    }
  }
`;
