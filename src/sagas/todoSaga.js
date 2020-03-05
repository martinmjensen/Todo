import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import todoService from '../todoService'
import * as types from '../actions/actionTypes'
import * as actions from '../actions/todoActions'

function* getTodos(action) {
    try {
        const todos = yield call(todoService.getTodos)
        yield put(actions.getTodosSucceeded(todos))
    } catch (error) {
        yield put(actions.getTodosFailed(error))
    }
}

function* deleteTodo(action) {
    try {
        const deleteTodo = yield call(todoService.deleteTodo, action.payload.id)
        yield put(actions.deleteSucceeded(action.payload.id))
    } catch (error) {
        yield put(actions.deleteFailed(error))
    }
}

function* toggleTodo(action) {
    try {
        const todo = yield call(todoService.toggleTodo, action.payload.id)
        yield put(actions.toggleSucceeded(todo))
    } catch (error) {
        yield put(actions.toggleFailed(error))
    }
}

function* addTodo(action) {
    try {
        const todo = yield call(todoService.addTodo, action.payload.todo)
        yield put(actions.addTodoSucceeded(todo))
    } catch (error) {
        yield put(actions.addTodoFailed(error))
    }
}

export default function* rootSaga() {
    yield takeLatest(types.GET_TODOS, getTodos)
    yield takeEvery(types.DELETE_TODO, deleteTodo)
    yield takeLatest(types.TOGGLE_TODO, toggleTodo)
    yield takeLatest(types.ADD_TODO, addTodo)
}