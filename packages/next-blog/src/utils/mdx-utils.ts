import { sync } from 'fast-glob'
import { promises } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

import type { Frontmatter, Post } from '@/types'

export const BLOG_POSTS_PATH = path.join(process.cwd(), 'contents/post')

export const LOG_POSTS_PATH = path.join(process.cwd(), 'contents/log')

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
  const paths = sync(`${BLOG_POSTS_PATH}/**/*.mdx`)

  const blogPosts = await Promise.all(
    paths.map(async (filePath) => {
      return await getPost('post', filePath)
    })
  )

  return sortPostsByDate(blogPosts)
}

export async function getLogPosts() {
  const paths = sync(`${LOG_POSTS_PATH}/**/*.mdx`)

  const logPosts = await Promise.all(
    paths.map(async (filePath) => {
      return await getPost('log', filePath)
    })
  )

  return sortPostsByDate(logPosts)
}

export async function getPost(type: 'post' | 'log', filePath: string): Promise<Post<Frontmatter>> {
  const raw = await promises.readFile(filePath, 'utf-8')

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
      format: 'mdx',
    },
  })
}
