import * as styles from './styles.css'
import { Card, List } from '@/components'
import { getBlogPosts } from '@/utils/mdx-utils'

export default async function PostsPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <List
        className={styles.list}
        items={posts}
        renderItem={(post) => <Card key={post.frontmatter.slug} post={post} />}
      />
    </div>
  )
}
