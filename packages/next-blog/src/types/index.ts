import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Frontmatter = {
  title: string
  date: string
  slug: string
  description: string
}

export type Post<TFrontmatter = Frontmatter> = {
  type: 'blog' | 'log'
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
}
