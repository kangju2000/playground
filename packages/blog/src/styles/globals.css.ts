import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  height: '100%',
  fontFamily: 'Noto Sans KR',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('input', {
  backgroundColor: 'none',
  outline: 'none',
  appearance: 'none',
});

globalStyle('textarea:focus, input:focus, button:focus', {
  outline: 'none',
});

globalStyle('button', {
  backgroundColor: 'none',
  outline: 'none',
  border: 'none',
});

globalStyle('ul, ol, li', {
  listStyle: 'none',
});
