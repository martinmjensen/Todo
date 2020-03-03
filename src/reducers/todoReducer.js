import * as types from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    todos: [],
    error: null
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
            }
        case types.GET_TODOS_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
        default:
            return state
    }
}

export default todoReducer