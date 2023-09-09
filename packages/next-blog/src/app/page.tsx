import Link from 'next/link'

import { getAllPosts } from '@/utils/mdx-utils'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ frontmatter, type }) => (
          <li key={frontmatter.slug}>
            <Link href={`/${type}/${frontmatter.slug}`}>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
