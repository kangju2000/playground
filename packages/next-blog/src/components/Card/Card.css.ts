import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  padding: '2rem',
  gap: '0.5rem',
})

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const date = style({
  fontSize: '0.875rem',
  color: '#666',
})
