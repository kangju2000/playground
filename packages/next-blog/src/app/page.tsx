import { promises as fs } from 'fs'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

import { MdxContent } from './mdx-components'

type Frontmatter = {
  title: string
  date: string
}

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  frontmatter: TFrontmatter
}

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  const raw = await fs.readFile(filepath, 'utf-8')

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  })

  const frontmatter = serialized.frontmatter as Frontmatter

  return {
    frontmatter,
    serialized,
  }
}

export default async function Home() {
  const { serialized, frontmatter } = await getPost('src/contents/first.mdx')

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>{frontmatter.title}</h1>
      <p>Published {frontmatter.date}</p>
      <hr />
      <MdxContent source={serialized} />
    </div>
  )
}
