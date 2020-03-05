import update from 'immutability-helper'
import * as types from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    todos: [],
    error: null,
    nextTodoId: 0,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODOS_REQUESTED:
            return { ...state, isLoading: true, }

        case types.GET_TODOS_SUCCEEDED:
            return {
                ...state,
                todos: action.payload.todos,
                isLoading: false,
                nextTodoId: state.todos.length
            }

        case types.GET_TODOS_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }

        case types.DELETE_TODO:
            const todoId = state.todos.findIndex(todo => todo.id === action.payload.id)
            return update(state, { todos: { $splice: [[todoId, 1]] } })

        case types.TOGGLE_TODO:
            const todoElement = state.todos.findIndex(todo => todo.id === action.payload.id)
            return update(state, { todos: { [todoElement]: { completed: { $apply: toggle => !toggle } } } })

        case types.ADD_TODO:
            let id = 0
            if (state.todos.length > 0) {
                id = Math.max(...state.todos.map(t => t.id)) + 1
            }
            return update(state, { todos: { $push: [{ id, ...action.payload.todo }] } })

        case types.DELETE_FAILED:
        case types.TOGGLE_FAILED:
        case types.ADD_TODO_FAILED:
            return { ...state, error: action.payload.error }
        default:
            return state
    }
}

export default todoReducer