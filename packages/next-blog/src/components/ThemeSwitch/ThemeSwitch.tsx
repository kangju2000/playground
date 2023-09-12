'use client'

import { useRouter } from 'next/navigation'

import * as styles from './ThemeSwitch.css'
import { Icon } from '@/components'
import { toggleScheme } from '@/utils/colorScheme'

const themes = {
  dark: {
    id: 'sun',
    label: 'Light Mode',
  },
  light: {
    id: 'moon',
    label: 'Dark Mode',
  },
}

interface ThemeSwitchProps {
  scheme: 'light' | 'dark'
}

export default function ThemeSwitch({ scheme }: ThemeSwitchProps) {
  const router = useRouter()

  const toggle = async () => {
    await toggleScheme()
    router.refresh()
  }

  return (
    <div onClick={toggle} className={styles.wrapper}>
      <Icon id={themes[scheme].id} />
    </div>
  )
}
