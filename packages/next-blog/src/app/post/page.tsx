import Link from 'next/link'

import Header from '@/components/Header/Header'
import { getBlogPosts } from '@/utils/mdx-utils'

export default async function PostsPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Header />
      <div>
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
    </>
  )
}
