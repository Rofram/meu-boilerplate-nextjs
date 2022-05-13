import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class AppStore {
  name = 'AppStore'

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  hydrate(data?: Partial<AppStore>) {
    if (!data) return

    Object.assign(this, data)
  }
}
