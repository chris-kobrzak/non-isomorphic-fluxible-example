import React, { PropTypes } from "react"
import {connectToStores, provideContext} from 'fluxible-addons-react'
import ContactDetailsStore from './stores/ContactDetailsStore'

class Application extends React.Component {

  render() {
    return (<div>
      <h1>Non-isomorphic Fluxable example</h1>
      <p>{this.props.pageName}</p>
    </div>)
  }
}

Application = provideContext(Application)

Application = connectToStores(
  Application,
  [ContactDetailsStore],
  (context, props) => ({
    pageName: context
      .getStore(ContactDetailsStore)
      .getCurrentPageName()
  })
)

export default Application
