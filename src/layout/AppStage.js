import React, { Component } from 'react'

export default class AppStage extends Component {
  render() {
    return (
      <div className="container">

        <div className="app-heading">
          header
        </div>

        <div className="row">
          <div className="col-sm-3">
            aside
          </div>
          <div className="col-sm-9">

            {this.props.children}
            
          </div>
        </div>
      </div>
    )
  }
}
