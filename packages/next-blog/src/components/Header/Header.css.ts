import { style } from '@vanilla-extract/css'

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
  padding: '0.5rem 1.5rem',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0.5rem 1rem',
    },
  },
})

export const avatar = style({
  overflow: 'hidden',
  borderRadius: '100%',
  '@media': {
    'screen and (max-width: 576px)': {
      display: 'none',
    },
  },
})

export const list = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  listStyle: 'none',
})

export const listItem = style({
  position: 'relative',
  padding: '0.5rem 1rem',
  fontSize: '.875rem',
  cursor: 'pointer',
})

export const underline = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  height: '1px',
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '.25rem',
})
