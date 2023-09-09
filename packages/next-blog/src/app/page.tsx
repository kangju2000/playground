import Link from 'next/link'

import { getPosts } from '@/utils/mdx-utils'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ frontmatter }) => (
          <li key={frontmatter.slug}>
            <Link href={`/${frontmatter.slug}`}>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <MdxContent source={serialized} /> */}
    </div>
  )
}
