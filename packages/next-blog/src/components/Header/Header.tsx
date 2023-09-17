import Image from 'next/image'
import Link from 'next/link'

import * as styles from './Header.css'
import NavList from './NavList'
import { ThemeSwitch } from '@/components'
import { getCurrentScheme } from '@/utils/colorScheme'

const links = [
  { href: '/', label: 'Home' },
  { href: '/post', label: 'Post' },
  { href: '/log', label: 'Log' },
]

export default async function Header() {
  const scheme = (await getCurrentScheme()) as 'light' | 'dark' | undefined

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.avatar}>
          <Image
            src="https://avatars.githubusercontent.com/u/23312485?v=4"
            alt="kangjuhyeok"
            width={32}
            height={32}
            className={styles.avatarImage}
          />
        </Link>
        <NavList links={links} />
        {scheme && <ThemeSwitch scheme={scheme} />}
      </nav>
    </header>
  )
}
