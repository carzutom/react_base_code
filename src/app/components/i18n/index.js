import React, {Component} from 'react'
import {connect} from "react-redux"

import './assets/css/Selector.css'

import {setLanguage} from "./actions"

class LanguageSelector extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ul className="languagepicker">
        {
          this.props.langs.map((lang) =>
            <a key={lang.code} href="#" onClick={this.props._selectLanguage.bind(this,lang.code)}>
              <li><img src={lang.icon}/>{lang.label}</li>
            </a>
          )
        }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    langs: state.langs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    _selectLanguage: (code) => dispatch(setLanguage(code)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
