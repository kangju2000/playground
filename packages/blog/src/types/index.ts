export type Post = {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
};

export type AllMdx = {
  nodes: {
    id: string;
    frontmatter: Frontmatter;
    excerpt: string;
    body: string;
    tableOfContents: string;
    internal: {
      contentFilePath: string;
    };
  }[];
};

export type Mdx = {
  id: string;
  frontmatter: Frontmatter;
  excerpt: string;
  html: string;
};

export type Frontmatter = {
  slug: string;
  title: string;
  createdAt: string;
  categories: string;
};

export type SiteMetadata = {
  title: string;
  siteUrl: string;
};
