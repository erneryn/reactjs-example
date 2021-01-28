import { combineReducers } from 'redux'
import likeReducer from './likeReducer'
import teamReducer from './teamReducer'
import eventReducer from './eventReducer'

export const reducer = combineReducers({
  likeReducer,
  teamReducer,
  eventReducer
})