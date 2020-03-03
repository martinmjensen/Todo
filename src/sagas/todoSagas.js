import { call, put, takeLatest } from 'redux-saga/effects'

import todoService from '../todoService'
import * as types from '../actions/actionTypes'

function* fetchTodos(action) {
    try {
        const todos = yield call(todoService.getTodos)
        yield put({ type: types.GET_TODOS_SUCCEEDED, payload: { todos } })
    } catch (error) {
        yield put({ type: types.GET_TODOS_FAILED, payload: { error } })
    }
}

export default function* rootSaga() {
    yield takeLatest(types.GET_TODOS_REQUESTED, fetchTodos)
}