import { globalStyle, style } from '@vanilla-extract/css'

export const container = style({
  position: 'sticky',
  top: 0,
  zIndex: 10,
})

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '43.75rem',
  height: '4rem',
  padding: '1rem 0.5rem',
  margin: '0 auto',
})

export const mainTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginRight: '1.5rem',
})

export const list = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  listStyle: 'none',
})

globalStyle(`${list} > a > li`, {
  padding: '0.5rem 1rem',
  fontSize: '.875rem',
  cursor: 'pointer',
})
