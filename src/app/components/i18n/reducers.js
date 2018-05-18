import {SET_LANG} from './actions'

const initialState = [
  {
    code: "en",
    icon: "http://i64.tinypic.com/fd60km.png",
    label: "English"
  },
  {
    code: "de",
    icon: "http://i63.tinypic.com/10zmzyb.png",
    label: "Dutch"
  }
]

export default (state = initialState, action) => {
  return state
}
