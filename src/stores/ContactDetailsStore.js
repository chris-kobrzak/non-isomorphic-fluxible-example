import {BaseStore} from 'fluxible/addons'

class ContactDetailsStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher)
    this.currentPageName = 'default value from Fluxible store'
  }

  handleReceivePage (payload) {
    this.currentPageName = payload.pageName
    this.emitChange()
  }

  getCurrentPageName () {
    return this.currentPageName
  }

  /*
  // For sending state to the client; only required in isomorphic env
  dehydrate () {
    return {
      currentPageName: this.currentPageName
    }
  }

  // For rehydrating server state; only required in isomorphic env
  rehydrate (state) {
    this.currentPageName = state.currentPageName
  }
  */
}

ContactDetailsStore.storeName = 'ContactDetailsStore'

ContactDetailsStore.handlers = {
  'RECEIVE_PAGE': 'handleReceivePage'
}

export default ContactDetailsStore
