import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router'

import App from './app'
import Playground from './playground'
import Posts from './module/posts'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="playground" component={Playground}></Route>
      <Route path="posts" component={Posts}></Route>
    </Route>
  </Router>
), document.getElementById('app'))


require('bootstrap/dist/css/bootstrap.css')
require('rc-table/assets/index.css')
