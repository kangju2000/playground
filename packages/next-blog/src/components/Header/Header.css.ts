import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem',
  height: '4rem',
})

export const wrapper = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
})

export const mainTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginRight: '1.5rem',
})
