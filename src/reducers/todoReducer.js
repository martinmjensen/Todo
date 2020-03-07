import * as types from '../actions/actionTypes'
import update from 'immutability-helper'

export const initialState = {
    isLoading: false,
    todos: [],
    error: null,
}

const todoReducer = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
        // ---- When initial request action is triggered 
        case types.GET_TODOS:
        case types.DELETE_TODO:
        case types.TOGGLE_TODO:
        case types.ADD_TODO:
            return { ...state, isLoading: true, }

        // ---- When SUCCESS actions are triggered 
        case types.GET_TODOS_SUCCEEDED:
            const getState = update(state, { todos: { $set: payload.todos } })
            return { ...getState, isLoading: false, }
        case types.DELETE_SUCCEEDED:
            const todoIndex1 = state.todos.findIndex(t => t.id === payload.id)
            const deleteState = update(state, { todos: { $splice: [[todoIndex1, 1]] } })
            return { ...deleteState, isLoading: false, }
        case types.TOGGLE_SUCCEEDED:
            const todoIndex2 = state.todos.findIndex(t => t.id === payload.todo.id)
            const toggleState = update(state, { todos: { $splice: [[todoIndex2, 1, payload.todo]] } })
            return { ...toggleState, isLoading: false, }
        case types.ADD_TODO_SUCCEEDED:
            const addState = update(state, { todos: { $push: [payload.todo] } })
            return { ...addState, isLoading: false, }

        // ---- When FAIL actions are triggered    
        case types.GET_TODOS_FAILED:
        case types.DELETE_FAILED:
        case types.TOGGLE_FAILED:
        case types.ADD_TODO_FAILED:
            console.error(`Server error: ${payload.error}`)
            return { ...state, error: payload.error, isLoading: false, }

        default:
            return state
    }
}

export default todoReducer