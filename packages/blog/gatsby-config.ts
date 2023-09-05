import { AllMdx, SiteMetadata } from './src/types';

import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `kangju 블로그`,
    description: `프론트엔드 개발자 강주혁의 블로그입니다.`,
    siteUrl: `https://kangju.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-vanilla-extract`,
    `babel-preset-gatsby`,
    `gatsby-plugin-mdx-frontmatter`,
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
        mdxOptions: {
          rehypePlugins: [],
          remarkPlugins: [],
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMdx },
            }: {
              query: { site: { siteMetadata: SiteMetadata }; allMdx: AllMdx };
            }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: new Date(node.frontmatter.createdAt),
                  url: `${site.siteMetadata.siteUrl}/posts/${node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/posts/${node.frontmatter.slug}`,
                  custom_elements: [{ 'content:encoded': node.body }],
                });
              });
            },
            query: `{
              allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  frontmatter {
                    title
                    createdAt
                    slug
                  }
                  body
                }
              }
            }`,
            output: '/rss.xml',
            title: 'kangju blog RSS Feed',
          },
        ],
      },
    },
  ],
};

export default config;
