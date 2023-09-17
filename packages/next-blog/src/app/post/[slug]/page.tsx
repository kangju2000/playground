import * as styles from './styles.css'
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

  const { frontmatter, serialized, type, readingMinutes } = post

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div>
          <span className={styles.date}>{frontmatter.date} </span>
          <span className={styles.readingTime}>{readingMinutes}분</span>
        </div>
      </div>
      <MdxContent source={serialized} />
    </div>
  )
}
