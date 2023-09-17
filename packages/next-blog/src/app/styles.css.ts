import { style } from '@vanilla-extract/css'

export const content = style({
  maxWidth: '43.75rem',
  margin: '0 auto',
  padding: '5rem 1.5rem',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '5rem 1rem',
    },
  },
})
