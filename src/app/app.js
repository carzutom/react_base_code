import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, browserHistory} from 'react-router'

import store from './store/configureStore'

const history = syncHistoryWithStore(browserHistory, store)

const routes = {
  childRoutes: [
    require('./routes/home').default,
  ]
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('app'))
