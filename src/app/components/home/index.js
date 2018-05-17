import React, {Component} from 'react'

import logo from './assets/img/logo.svg'
import './assets/css/Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is a base code for react projects. Happy enjoy!
        </p>
      </div>
    )
  }
}

export default Home
