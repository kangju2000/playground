import { getLogPosts } from '@/utils/mdx-utils'

export default async function LogPostsPage() {
  const logPosts = await getLogPosts()

  return (
    <div>
      <h1>Log</h1>
      <ul>
        {logPosts.map((post, index) => (
          <li key={index}>
            <p>{post.frontmatter.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
