import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import todoReducer from '../redux/ducks/todo'
import rootSaga from '../sagas/todoSaga'


const rootReducer = combineReducers({
    todo: todoReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

export default store