'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import * as styles from './ThemeSwitch.css'
import { Icon } from '@/components'

const themes = {
  light: {
    id: 'sun',
    label: 'Light Mode',
  },
  dark: {
    id: 'moon',
    label: 'Dark Mode',
  },
}

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={styles.wrapper}>
      {mounted && <Icon id={resolvedTheme === 'dark' ? themes.light.id : themes.dark.id} />}
    </div>
  )
}
