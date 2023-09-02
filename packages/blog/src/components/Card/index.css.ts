import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const cardTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

export const cardDescription = style({
  fontSize: '1rem',
  marginBottom: '0.5rem',
});

export const cardDate = style({
  fontSize: '0.75rem',
  color: '#666',
  marginBottom: '0.5rem',
});
