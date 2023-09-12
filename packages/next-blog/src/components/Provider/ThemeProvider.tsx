'use client'

import { ThemeProvider as Provider } from 'next-themes'

import { darkTheme, lightTheme } from '@/styles/vars.css'

import type { PropsWithChildren } from 'react'

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <Provider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </Provider>
  )
}
