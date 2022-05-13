import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': { boxSizing: 'border-box', margin: 0, padding: 0 },
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  html: {
    scrollBehavior: 'smooth'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  },
  body: {
    background: '$lightBg',
  },
  button: { cursor: 'pointer' },
})