import { call, put, takeLatest } from 'redux-saga/effects'

import todoService from '../todoService'

function* fetchTodos(action) {
    try {
        const todos = yield call(todoService.getTodos)
        yield put({ type: 'GET_TODOS_SUCCEEDED', payload: { todos } })
    } catch (error) {
        yield put({ type: 'GET_TODOS_FAILED', payload: { error } })
    }
}

export default function* rootSaga() {
    yield takeLatest('GET_TODOS_REQUESTED', fetchTodos)
}