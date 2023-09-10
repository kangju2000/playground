import { MdxContent } from '../../mdx-components'
import { getBlogPosts } from '@/utils/mdx-utils'

import type { PropsWithChildren } from 'react'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params: { slug } }: PropsWithChildren<PostPageProps>) {
  const posts = await getBlogPosts()
  const post = posts.find(({ frontmatter }) => encodeURI(frontmatter.slug) === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      나는 Blog!
      <MdxContent source={post.serialized} />
    </div>
  )
}
