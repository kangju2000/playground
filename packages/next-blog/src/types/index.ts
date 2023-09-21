import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Frontmatter = {
  title: string
  date: string
  slug: string
  description: string
  tags: string[]
  thumbnail: string
}

export type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
  readingMinutes: number
}

export type BlogPost = Post<Frontmatter>
export type LogPost = Post<Partial<Frontmatter> & { title: string; date: string }>
