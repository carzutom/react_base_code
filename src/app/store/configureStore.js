import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {loadTranslations, setLocale, syncTranslationWithStore, i18nReducer} from 'react-redux-i18n'
import {routerReducer} from 'react-router-redux'

import LangReducer from '../components/i18n/reducers'

import translations from '../locale'

export const rootReducer = combineReducers({
  routing: routerReducer,
  i18n: i18nReducer,
  langs: LangReducer
})

const store =  createStore(
  rootReducer,
  applyMiddleware(
    thunk,
  )
)

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translations))
store.dispatch(setLocale('en'))

export default store
