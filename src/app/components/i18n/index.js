import React, {Component} from 'react'
import {connect} from "react-redux"

import './assets/css/selector.less'

import {setLanguage} from "./actions"

import usa from './assets/img/usa.svg'
import germany from './assets/img/germany.svg'

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
              <li><img className="image" src={lang.code == "en" && usa || lang.code == "de" && germany}/>{lang.label}</li>
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
