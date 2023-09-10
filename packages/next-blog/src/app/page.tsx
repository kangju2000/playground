import { Card, Header } from '@/components'
import { getAllPosts } from '@/utils/mdx-utils'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <>
      <Header />
      <ul>
        {posts.map((post) => (
          <Card key={post.frontmatter.slug} post={post} />
        ))}
      </ul>
    </>
  )
}
