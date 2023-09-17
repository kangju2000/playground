import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

const global = createGlobalTheme('html', {
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '12px',
  },
})

const colors = createThemeContract({
  background: null,
  text: null,
})

export const lightTheme = createTheme(colors, {
  background: 'white',
  text: '#1A1A23',
})

export const darkTheme = createTheme(colors, {
  background: '#1A1A23',
  text: '#ededed',
})

export const vars = { ...global, colors }
