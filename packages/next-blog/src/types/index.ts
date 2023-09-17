import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Frontmatter = {
  title: string
  date: string
  slug: string
  description: string
  tags: string[]
  thumbnail: string
}

export type Post<TFrontmatter = Frontmatter> = {
  type: 'post' | 'log'
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
}
