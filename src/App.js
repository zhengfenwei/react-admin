import React, { Component } from 'react'
import AppStage from 'layout/AppStage'

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
