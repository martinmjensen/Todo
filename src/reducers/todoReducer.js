import * as types from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    todos: [],
    error: null,
    isWorking: false,
}

const todoReducer = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case types.GET_TODOS:
            newState.isLoading = true
            return newState

        case types.DELETE_TODO:
        case types.TOGGLE_TODO:
        case types.ADD_TODO:
            newState.isWorking = true
            return newState

        case types.GET_TODOS_SUCCEEDED:
            newState.todos = action.payload.todos
            newState.isLoading = false
            return newState

        case types.DELETE_SUCCEEDED:
            const todoId = newState.todos.findIndex(todo => todo.id === action.payload.id)
            newState.todos.splice(todoId, 1)
            newState.isWorking = false
            return newState

        case types.TOGGLE_SUCCEEDED:
            const todoIndex = newState.todos.findIndex(todo => todo.id === action.payload.todo.id)
            newState.todos.splice(todoIndex, 1, action.payload.todo)
            newState.isWorking = false
            return newState

        case types.ADD_TODO_SUCCEEDED:
            newState.isWorking = false
            newState.todos.push(action.payload.todo)
            return newState

        case types.GET_TODOS_FAILED:
            newState.error = action.payload.error
            newState.isLoading = false
            return newState

        case types.DELETE_FAILED:
        case types.TOGGLE_FAILED:
        case types.ADD_TODO_FAILED:
            console.error(`Server error: ${action.payload.error}`)
            newState.error = action.payload.error
            newState.isWorking = false
            newState.isloading = false
            return newState

        default:
            return state
    }
}

export default todoReducer