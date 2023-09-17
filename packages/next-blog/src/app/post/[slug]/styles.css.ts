import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1.5rem',
  borderBottom: '.05rem solid #565656',
  paddingBottom: '1.5rem',
})

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
})

export const date = style({
  fontSize: '0.875rem',
  color: '#666',
})

export const readingTime = style({
  fontSize: '0.875rem',
  color: '#666',
})
