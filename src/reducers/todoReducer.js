import update from 'immutability-helper'
import * as types from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    todos: [],
    error: null,
    nextTodoId: 0,
    isWorking: false,
}

const todoReducer = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case types.GET_TODOS:
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
        case types.TOGGLE_TODO:
        case types.ADD_TODO:
            return { ...state, isWorking: true, }

        case types.DELETE_SUCCEEDED:
            newState.isWorking = false
            const todoId = newState.todos.findIndex(todo => todo.id === action.payload.id)
            return update(newState, { todos: { $splice: [[todoId, 1]] } })
        case types.TOGGLE_SUCCEEDED:
            newState.isWorking = false
            const todoIndex = newState.todos.findIndex(todo => todo.id === action.payload.todo.id)
            return update(newState, { todos: { $splice: [[todoIndex, 1, action.payload.todo]] } })
        case types.ADD_TODO_SUCCEEDED:
            newState.isWorking = false
            return update(newState, { todos: { $push: [action.payload.todo] } })

        case types.DELETE_FAILED:
        case types.TOGGLE_FAILED:
        case types.ADD_TODO_FAILED:
            console.error(`Server error: ${action.payload.error}`)
            return { ...state, error: action.payload.error, isWorking: false, isLoading: false, }
        default:
            return state
    }
}

export default todoReducer