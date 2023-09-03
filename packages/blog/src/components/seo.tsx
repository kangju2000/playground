import { useStaticQuery, graphql } from 'gatsby';

import type { PropsWithChildren } from 'react';

interface SeoProps {
  description?: string;
  title: string;
}

const Seo = ({ description, title, children }: PropsWithChildren<SeoProps>) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default Seo;
