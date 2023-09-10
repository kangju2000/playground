import dayjs from 'dayjs'
import Link from 'next/link'

import { dateStyle, titleStyle, wrapperStyle } from './Card.css'
import { Post } from '@/types'

interface CardProps {
  post: Post
}

export default function Card({ post }: CardProps) {
  const { frontmatter, type } = post

  return (
    <Link href={`/${type}/${frontmatter.slug}`}>
      <li className={wrapperStyle}>
        <h2 className={titleStyle}>{frontmatter.title}</h2>
        <span className={dateStyle}>{dayjs(frontmatter.date).format('YYYY-MM-DD')}</span>
      </li>
    </Link>
  )
}
