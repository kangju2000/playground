import Link from 'next/link'

import { header, mainTitle, wrapper } from './Header.css'

export default function Header() {
  return (
    <nav className={header}>
      <div className={wrapper}>
        <h1 className={mainTitle}>kangju.dev</h1>
        <Link href="/">Home</Link>
        <Link href="/post">Post</Link>
        <Link href="/log">Log</Link>
      </div>
    </nav>
  )
}
