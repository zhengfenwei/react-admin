import React, { Component } from 'react'
import AppStage from 'appStage.js'

import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <AppStage>
          {this.props.children}
        </AppStage>

      </Provider>
    )
  }
}
