import { combineReducers } from 'redux'
import launchesReducer from './launches'

export default combineReducers({
    launchReducer: launchesReducer
})

