import { type PageProps, graphql, Link } from 'gatsby';

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
      <p className="dark">블로그 컨텐츠 내용</p>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        console.log(node);
        return (
          <div key={node.fields.slug}>
            <Link to={node.fields.slug}>
              <span>{node.frontmatter.date}</span>
              <span>{title}</span>
            </Link>
          </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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
