import { Link } from 'gatsby'

import { cardDate, cardDescription, cardTitle, cardWrapper } from './index.css'

interface CardProps {
  title: string
  date: string
  excerpt: string
  slug: string
}

export default function Card({ title, date, excerpt, slug }: CardProps) {
  return (
    <div className={cardWrapper}>
      <Link to={slug}>
        <div className={cardTitle}>{title}</div>
        <p className={cardDescription} dangerouslySetInnerHTML={{ __html: excerpt }} />
        <span className={cardDate}>{date}</span>
      </Link>
    </div>
  )
}
