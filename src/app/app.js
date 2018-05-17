import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, browserHistory} from 'react-router'

import store from './store/configureStore'
import registerServiceWorker from '../registerServiceWorker'

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
), document.getElementById('app-container'))

registerServiceWorker()
