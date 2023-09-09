import fs, { promises } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

import type { Frontmatter, Post } from '@/types'

export const POSTS_PATH = path.join(process.cwd(), 'contents')

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

export const sortPostsByDate = (posts: Post[]) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date)
    const bDate = new Date(b.frontmatter.date)

    return aDate > bDate ? -1 : 1
  })
}

export async function getPosts() {
  const posts = await Promise.all(
    postFilePaths.map(async (filePath) => {
      return await getPost(filePath)
    })
  )

  return sortPostsByDate(posts)
}

export async function getPost(filePath: string): Promise<Post<Frontmatter>> {
  const raw = await promises.readFile(path.join(POSTS_PATH, filePath), 'utf-8')

  const serialized = await serializeMDX<Frontmatter>(raw)

  return {
    serialized,
    frontmatter: serialized.frontmatter,
  }
}

export const serializeMDX = <TFrontmatter>(raw: string) => {
  return serialize<Record<string, unknown>, TFrontmatter>(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkBreaks, remarkGfm, remarkToc],
      rehypePlugins: [],
      format: 'mdx',
    },
  })
}
