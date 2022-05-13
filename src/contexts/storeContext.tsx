import { createContext } from 'react'
import { AppStore } from 'store'

type StoreProviderProps = {
  initialState?: Partial<AppStore>
  children: React.ReactNode
}

let store: AppStore

export const StoreContext = createContext<AppStore>({} as AppStore)

export function StoreProvider({ children, initialState }: StoreProviderProps) {
  const store = initializeStore(initialState)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(initialData: Partial<AppStore> | null = null) {
  const _store = store ?? new AppStore()

  if (initialData) {
    _store.hydrate(initialData)
  }
  
  if (typeof window === 'undefined') return _store
  
  if (!store) store = _store

  return _store
}