import { combineReducers } from 'redux'
import { reducers as common } from './common'

const commonReducers = () => combineReducers(common);

export default commonReducers
