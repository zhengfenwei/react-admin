import React, { Component } from 'react'
import AppStage from 'layout/AppStage'

export default class App extends Component {
  render() {
    return (
      <AppStage>
        {this.props.children}
      </AppStage>
    )
  }
}
