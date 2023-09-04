import { PageProps, graphql } from 'gatsby';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SiteMetadata } from '@/types';

interface NotFoundPageProps {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const NotFoundPage = ({ data, location }: PageProps<NotFoundPageProps>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle} location={location}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
