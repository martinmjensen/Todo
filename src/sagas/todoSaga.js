import { all, call, put, take, takeLatest, takeEvery } from 'redux-saga/effects'

import todoService from '../todoService'
import * as types from '../actions/actionTypes'
import * as actions from '../actions/todoActions'

export function* getTodos(action) {
    try {
        const todos = yield call(todoService.getTodos)
        yield put(actions.getTodosSucceeded(todos))
    } catch (error) {
        yield put(actions.getTodosFailed(error))
    }
}

function* deleteTodo(action) {
    try {
        yield call(todoService.deleteTodo, action.payload.id)
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

// watchDeleteTodo uses the call effect that blocks multiple delete requests to the server
function* watchDeleteTodo() {
    while (true) {
        const action = yield take(types.DELETE_TODO)
        yield call(deleteTodo, action)
    }
}

function* watchGetTodos() { yield takeLatest(types.GET_TODOS, getTodos) }
function* watchToggleTodo() { yield takeEvery(types.TOGGLE_TODO, toggleTodo) }
function* watchAddTodo() { yield takeEvery(types.ADD_TODO, addTodo) }

// rootSaga runs the watchers in parallel
export default function* rootSaga() {
    yield all([
        watchGetTodos(),
        watchDeleteTodo(),
        watchToggleTodo(),
        watchAddTodo(),
    ])
}