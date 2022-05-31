import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { createWrapper } from 'next-redux-wrapper';

const makeStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk))
}

export const wrapper = createWrapper(makeStore, { debug: true })