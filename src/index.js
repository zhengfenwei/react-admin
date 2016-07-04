import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'

import App from './App'
import Playground from './playground'

require('bootstrap/dist/css/bootstrap.css')

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="playground" component={Playground}></Route>
  </Router>
), document.getElementById('root'))
