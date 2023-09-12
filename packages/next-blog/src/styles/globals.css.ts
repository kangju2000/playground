import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

const parentElements = ['canvas', 'iframe', 'img', 'svg', 'video']
const childElements = ['svg *', 'symbol *']

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  all: 'unset',
  display: 'revert',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
})

globalStyle('html, body', {
  height: '100%',
  fontFamily: 'PretendardVariable Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
})

globalStyle('body', {
  background: vars.colors.background,
  color: vars.colors.text,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('input', {
  backgroundColor: 'none',
  outline: 'none',
  appearance: 'none',
})

globalStyle('textarea:focus, input:focus, button:focus', {
  outline: 'none',
})

globalStyle('button', {
  backgroundColor: 'none',
  outline: 'none',
  border: 'none',
})

globalStyle('ul, ol, li', {
  listStyle: 'none',
})
