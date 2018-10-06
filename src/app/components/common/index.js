import React, {Component} from 'react'

import './assets/css/layout.less'

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
