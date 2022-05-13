import { render } from '@testing-library/react'
import { StoreProvider } from 'contexts'

export function renderWithContext(component: React.ReactElement) {
  return render(<StoreProvider>{component}</StoreProvider>)
}