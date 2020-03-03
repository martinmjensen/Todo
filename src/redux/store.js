import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import createSagaMiddleware from 'redux-saga'

import todoReducer from '../redux/ducks/todo'


const rootReducer = combineReducers({
    todo: todoReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store