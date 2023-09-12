import Link from 'next/link'

import * as styles from './Header.css'
import { ThemeSwitch } from '@/components'
import { getCurrentScheme } from '@/utils/colorScheme'

export default async function Header() {
  const scheme = (await getCurrentScheme()) as 'light' | 'dark' | undefined

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.mainTitle}>kangju.dev</h1>
        <ul className={styles.list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/post">
            <li>Post</li>
          </Link>
          <Link href="/log">
            <li>Log</li>
          </Link>
        </ul>
        {scheme && <ThemeSwitch scheme={scheme} />}
      </nav>
    </header>
  )
}
