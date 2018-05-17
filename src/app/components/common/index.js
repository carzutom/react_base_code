import React, {Component} from 'react'

import './assets/css/Layout.css'

class Layout extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
