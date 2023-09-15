'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import * as styles from './Header.css'
import { List } from '@/components'

interface NavListProps {
  links: { href: string; label: string }[]
}

export default function NavList({ links }: NavListProps) {
  const pathname = usePathname()

  return (
    <List
      className={styles.list}
      items={links}
      renderItem={(item) => (
        <li key={item.label} className={styles.listItem}>
          <Link href={item.href}>{item.label}</Link>
          {pathname === item.href && (
            <motion.span
              layoutId="underline"
              className={styles.underline}
              transition={{ duration: 0.2 }}
            />
          )}
        </li>
      )}
    />
  )
}
