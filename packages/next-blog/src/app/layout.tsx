import localFont from 'next/font/local'

import '@/styles/globals.css'
import * as styles from './styles.css'
import { Header, ThemeProvider } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'kangju.dev',
  description: '프론트엔드 개발자 강주혁의 블로그입니다.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className={styles.content}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'PretendardVariable',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})
