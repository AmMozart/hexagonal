import { combineReducers } from 'redux'
import { info } from './info'
import field from './field'

export const rootReducers = combineReducers({ info, field })