import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AppStage extends Component {
  render() {
    return (
      <div className="container">

        <div className="app-heading">
          header
        </div>

        <div className="row">
          <div className="col-sm-3">
            sidebar
            <ul>
              <li><Link to="/playground">Playground</Link></li>
              <li><Link to="/posts">Posts</Link></li>
            </ul>
          </div>
          <div className="col-sm-9">

            {this.props.children}

          </div>
        </div>
      </div>
    )
  }
}
