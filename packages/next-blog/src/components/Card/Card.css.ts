import { style } from '@vanilla-extract/css'

export const wrapperStyle = style({
  display: 'flex',
  alignItems: 'end',
  padding: '2rem',
  gap: '0.5rem',
})

export const titleStyle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const dateStyle = style({
  fontSize: '0.875rem',
  color: '#666',
})
