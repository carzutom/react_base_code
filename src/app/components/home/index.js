import React, {Component} from 'react'
import {Translate} from 'react-redux-i18n'

import logo from './assets/img/logo.svg'
import './assets/css/home.less'

import LanguageSelector from '../i18n'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><Translate value="home.title"/></h1>
        </header>
        <p className="App-intro">
          <Translate value="home.message"/>
        </p>
        <div style={{width: 166, display: 'block', position: 'relative', margin: '0 auto'}}>
          <LanguageSelector />
        </div>
      </div>
    )
  }
}

export default Home
