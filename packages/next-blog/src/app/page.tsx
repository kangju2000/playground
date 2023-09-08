import { MdxContent } from './mdx-components'
import { getPost } from 'src/utils/getPost'

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
