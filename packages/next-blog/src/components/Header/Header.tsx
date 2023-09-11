import Link from 'next/link'

import * as styles from './Header.css'

export default function Header() {
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
        <div>light/dark</div>
      </nav>
    </header>
  )
}
