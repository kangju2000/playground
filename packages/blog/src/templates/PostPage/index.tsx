import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '@/components/Layout';
import type { Post } from '@/types';

interface PostPageProps {
  location: Location;
  data: {
    post: Post;
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

const PostPage: React.FC<PostPageProps> = ({ location, data: { post } }) => {
  // const siteTitle = site.siteMetadata?.title || `Title`;
  console.log(post);
  return (
    <Layout location={location}>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.createdAt}</p>
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
          {/* <li>
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
          </li> */}
        </ul>
      </nav>
    </Layout>
  );
};

export default PostPage;

export const pageQuery = graphql`
  query PostPage($id: String!) {
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
