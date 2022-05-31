import { combineReducers } from 'redux'

import global from './global'

export default combineReducers({
  global,
  noReducer: (state = {}) => state
})




