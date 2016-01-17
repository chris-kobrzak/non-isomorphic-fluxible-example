import React from 'react'
import ReactDOM from 'react-dom'
import Fluxible from 'fluxible'
import FluxibleComponent from 'fluxible-addons-react/FluxibleComponent'
import { createElementWithContext } from 'fluxible-addons-react'
import Application from './Application.jsx'
import ContactDetailsStore from './stores/ContactDetailsStore'

// Declare application as a Fluxible instance
const fluxibleApp = new Fluxible({component: Application})
const context = fluxibleApp.createContext()

// List all stores app wants access to
fluxibleApp.registerStore(ContactDetailsStore)

ReactDOM.render(
  <FluxibleComponent context={context.getComponentContext()}>
    <Application />
  </FluxibleComponent>,
  document.getElementById('container')
)
