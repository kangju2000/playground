import { type PageProps, graphql } from 'gatsby';
import React from 'react';

import Layout from '@/components/Layout';

interface IndexProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
        description: string;
      };
    }[];
  };
}

const Index = ({ data: { site }, location }: PageProps<IndexProps>) => {
  return (
    <Layout location={location}>
      <p className="dark">블로그 컨텐츠 내용</p>
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
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
