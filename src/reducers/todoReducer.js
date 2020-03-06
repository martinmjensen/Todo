import * as types from '../actions/actionTypes'

export const initialState = {
    isLoading: false,
    todos: [],
    error: null,
}

const todoReducer = (state = initialState, action) => {
    let newState = { ...state }
    let { type, payload } = action

    switch (type) {
        // ---- When initial request action is triggered 
        case types.GET_TODOS:
            newState.isLoading = true
            return newState
        case types.DELETE_TODO:
        case types.TOGGLE_TODO:
        case types.ADD_TODO:
            newState.isLoading = true
            return newState

        // ---- When SUCCESS actions are triggered 
        case types.GET_TODOS_SUCCEEDED:
            newState.todos = payload.todos
            newState.isLoading = false
            return newState
        case types.DELETE_SUCCEEDED:
            const todoIndex1 = newState.todos.findIndex(t => t.id === payload.id)
            newState.todos.splice(todoIndex1, 1)
            newState.isLoading = false
            return newState
        case types.TOGGLE_SUCCEEDED:
            const todoIndex2 = newState.todos.findIndex(t => t.id === payload.todo.id)
            newState.todos.splice(todoIndex2, 1, payload.todo)
            newState.isLoading = false
            return newState
        case types.ADD_TODO_SUCCEEDED:
            newState.todos.push(payload.todo)
            newState.isLoading = false
            return newState

        // ---- When FAIL actions are triggered    
        case types.GET_TODOS_FAILED:
            newState.error = payload.error
            newState.isLoading = false
            return newState
        case types.DELETE_FAILED:
        case types.TOGGLE_FAILED:
        case types.ADD_TODO_FAILED:
            console.error(`Server error: ${payload.error}`)
            newState.error = payload.error
            newState.isloading = false
            return newState

        default:
            return state
    }
}

export default todoReducer