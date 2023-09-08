import { serialize } from 'next-mdx-remote/serialize'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

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
