import { type PageProps, graphql } from 'gatsby';

import Card from '@/components/Card';
import Layout from '@/components/Layout';

interface IndexProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        excerpt: string;
        frontmatter: {
          date: string;
          title: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
}

const Index = ({ data, location }: PageProps<IndexProps>) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <Card
            key={node.id}
            title={title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            slug={node.fields.slug}
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
