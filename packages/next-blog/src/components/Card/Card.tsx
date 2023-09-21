import Image from 'next/image'
import Link from 'next/link'

import * as styles from './Card.css'
import { BlogPost } from '@/types'

interface CardProps {
  post: BlogPost
}

export default function Card({ post }: CardProps) {
  const { frontmatter } = post

  return (
    <Link href={`/post/${frontmatter.slug}`}>
      <li className={styles.wrapper}>
        <Image
          src={frontmatter.thumbnail}
          alt="thumbnail"
          width={150}
          height={150}
          className={styles.thumbnail}
        />
        <div>
          <h2 className={styles.title}>{frontmatter.title}</h2>
          <p className={styles.description}>{frontmatter.description}</p>
          <span className={styles.date}>{frontmatter.date}</span>
        </div>
      </li>
    </Link>
  )
}
