import dayjs from 'dayjs'
import Link from 'next/link'

import * as styles from './Card.css'
import { Post } from '@/types'

interface CardProps {
  post: Post
}

export default function Card({ post }: CardProps) {
  const { frontmatter, type } = post

  return (
    <Link href={`/${type}/${frontmatter.slug}`}>
      <li className={styles.wrapper}>
        <h2 className={styles.title}>{frontmatter.title}</h2>
        <span className={styles.date}>{dayjs(frontmatter.date).format('YYYY-MM-DD')}</span>
      </li>
    </Link>
  )
}
