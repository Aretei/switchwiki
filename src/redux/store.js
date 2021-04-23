import { createStore, applyMiddleware, combineReducers } from 'redux'
import switchReducer from './reducers/switchReducer'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    authReducer,
    switchReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))