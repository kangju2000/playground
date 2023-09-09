import fs, { promises } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

import type { Frontmatter, Post } from '@/types'

export const BLOG_POSTS_PATH = path.join(process.cwd(), 'contents/blog')

export const LOG_POSTS_PATH = path.join(process.cwd(), 'contents/log')

export const blogPostFilePaths = fs
  .readdirSync(BLOG_POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const logPostFilePaths = fs
  .readdirSync(LOG_POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const sortPostsByDate = (posts: Post[]) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date)
    const bDate = new Date(b.frontmatter.date)

    return aDate > bDate ? -1 : 1
  })
}

export async function getAllPosts() {
  const blogPosts = await getBlogPosts()
  const logPosts = await getLogPosts()

  return sortPostsByDate([...blogPosts, ...logPosts])
}

export async function getBlogPosts() {
  const blogPosts = await Promise.all(
    blogPostFilePaths.map(async (filePath) => {
      return await getPost('blog', filePath)
    })
  )

  return sortPostsByDate(blogPosts)
}

export async function getLogPosts() {
  const logPosts = await Promise.all(
    logPostFilePaths.map(async (filePath) => {
      return await getPost('log', filePath)
    })
  )

  return sortPostsByDate(logPosts)
}

export async function getPost(type: 'blog' | 'log', filePath: string): Promise<Post<Frontmatter>> {
  const POSTS_PATH = type === 'blog' ? BLOG_POSTS_PATH : LOG_POSTS_PATH

  const raw = await promises.readFile(path.join(POSTS_PATH, filePath), 'utf-8')

  const serialized = await serializeMDX<Frontmatter>(raw)

  return {
    type,
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
