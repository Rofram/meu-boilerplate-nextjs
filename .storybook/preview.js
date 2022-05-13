import '../.jest/next-image-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { globalStyles } from '../src/styles/global'


export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      {globalStyles()}
      <Story />
    </>
  )
]