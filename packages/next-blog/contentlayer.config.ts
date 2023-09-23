import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import dayjs from 'dayjs'
import readingTime from 'reading-time'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

const ReadTime = defineNestedType(() => ({
  name: 'ReadTime',
  fields: {
    text: { type: 'string', required: true },
    minutes: { type: 'number', required: true },
    time: { type: 'number', required: true },
    words: { type: 'number', required: true },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `post/**/*.mdx`,
  fields: {
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    readTime: {
      type: 'nested',
      of: ReadTime,
      resolve: (post) => readingTime(post.body.raw),
    },
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export const Log = defineDocumentType(() => ({
  name: 'Log',
  filePathPattern: `log/**/*.mdx`,
  fields: {
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    date: {
      type: 'string',
      resolve: (post) => {
        const splitPath = post._raw.flattenedPath.match(/(\d{2}\.\d{2})\/(\d{2}\.\d{2})/)

        if (!splitPath) {
          return undefined
        }

        const dateString = '20' + splitPath[1].split('.')[0] + '.' + splitPath[2]

        return dayjs(dateString).format('YY.MM.DD')
      },
    },
    url: { type: 'string', resolve: (post) => `/logs/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Post, Log],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
    rehypePlugins: [rehypePrismPlus],
  },
})
