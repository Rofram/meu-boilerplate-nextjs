import { useContext } from "react"
import { StoreContext } from "contexts"

export function useStore() {
  const context = useContext(StoreContext)

  if (Object.keys(context).length === 0) {
    throw new Error('useStore must be used within a StoreProvider')
  }

  return context
}