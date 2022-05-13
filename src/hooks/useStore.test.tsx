import { render } from '@testing-library/react'
import { renderWithContext } from 'utils/test'

import { useStore } from '.'

const TestComponent = () => {
  const store = useStore()

  return <div>{store.name}</div>
}

describe("useStore", () => {
  it("should render the component with the state when the component is on StoreProvider", () => {
    const { getByText } = renderWithContext(<TestComponent />)

    expect(getByText(/appStore/i)).toBeInTheDocument()
  })

  it("should return an error when the component is not in StateProvider", () => {
    expect(() => {
      render(<TestComponent />)
    }).toThrowError(/useStore must be used within a StoreProvider/)
  })
})