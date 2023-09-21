import dayjs from 'dayjs'
import { sync } from 'fast-glob'
import { promises } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import readingTime from 'reading-time'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

import type { BlogPost, LogPost } from '@/types'

export const BLOG_POSTS_PATH = path.join(process.cwd(), 'contents/post')

export const LOG_POSTS_PATH = path.join(process.cwd(), 'contents/log')

export const sortPostsByDate = <T extends BlogPost | LogPost>(posts: T[]) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date)
    const bDate = new Date(b.frontmatter.date)

    return aDate > bDate ? -1 : 1
  })
}

export async function getBlogPosts() {
  const paths = sync(`${BLOG_POSTS_PATH}/**/*.mdx`)

  const blogPosts = await Promise.all(
    paths.map(async (filePath) => {
      return await getPost(filePath)
    })
  )

  return sortPostsByDate(blogPosts)
}

export async function getLogPosts() {
  const paths = sync(`${LOG_POSTS_PATH}/**/*.mdx`)

  const logPosts = await Promise.all(
    paths.map(async (filePath) => {
      return await getLogPost(filePath)
    })
  )

  return sortPostsByDate(logPosts)
}

export async function getPost(filePath: string): Promise<BlogPost> {
  const raw = await promises.readFile(filePath, 'utf-8')

  const serialized = await serializeMDX<BlogPost['frontmatter']>(raw)

  return {
    serialized,
    frontmatter: {
      ...serialized.frontmatter,
      date: dayjs(serialized.frontmatter.date).format('YYYY.MM.DD'),
    },
    readingMinutes: readingTime(raw).minutes,
  }
}

export async function getLogPost(filePath: string): Promise<LogPost> {
  const raw = await promises.readFile(filePath, 'utf-8')

  const serialized = await serializeMDX<LogPost['frontmatter']>(raw)

  const date = raw
    .split('\n')
    .find((line) => line.startsWith('#'))
    ?.replace('# ', '')
    .trim()

  return {
    serialized,
    frontmatter: {
      ...serialized.frontmatter,
      title: serialized.frontmatter.title || date || '',
      date: date || '',
    },
    readingMinutes: readingTime(raw).minutes,
  }
}

export const serializeMDX = <TFrontmatter>(raw: string) => {
  return serialize<Record<string, unknown>, TFrontmatter>(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkBreaks, remarkGfm, remarkToc],
      rehypePlugins: [rehypePrismPlus],
      format: 'mdx',
    },
  })
}
