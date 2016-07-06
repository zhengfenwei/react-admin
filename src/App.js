import React, { Component } from 'react'
import AppStage from 'layout/appStage'

export default class App extends Component {
  render() {
    return (
      <AppStage>
        {this.props.children}
      </AppStage>
    )
  }
}
