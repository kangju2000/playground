import { Link, graphql } from 'gatsby';
import * as React from 'react';

import Layout from '@/components/Layout';
import { Post, SiteMetadata } from '@/types';

interface PostPageProps {
  location: Location;
  data: {
    site: { siteMetadata: SiteMetadata };
    current: Post;
    previous: Post;
    next: Post;
  };
  pageContext: {
    readingTime: {
      minutes: number;
      text: string;
      time: number;
      words: number;
    };
  };
}

const PostPage: React.FC<PostPageProps> = ({
  location,
  data: { site, current, previous, next },
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{current.frontmatter.title}</h1>
          <p>{current.frontmatter.createdAt}</p>
        </header>
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default PostPage;

export const pageQuery = graphql`
  query PostPage($id: String!, $tags: [String!]!, $slug: String!) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        createdAt
      }
      tableOfContents
    }
  }
`;
