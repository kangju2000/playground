import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.8,
    transition: 'opacity 0.2s ease-in-out',
  },
})

export const thumbnail = style({
  borderRadius: '1rem',
  objectFit: 'cover',
  flexShrink: 0,
})

export const title = style({
  marginBottom: '.75rem',
  fontSize: '1.875rem',
  fontWeight: 'bold',
})

export const description = style({
  marginBottom: '.75rem',
  fontSize: '1.125rem',
  color: '#9f9fb0',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  overflow: 'hidden',
  wordBreak: 'break-all',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
})

export const date = style({
  fontSize: '0.875rem',
  color: '#666',
})
