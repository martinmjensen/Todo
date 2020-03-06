import todoReducer, { initialState } from '../todoReducer'
import * as types from '../../actions/actionTypes'

const testTodos = [
    { id: 0, title: 'hello there', completed: false, },
    { id: 1, title: 'hay there', completed: true, },
]

describe('todo reducer', () => {
    it('should return the initial state', () => {
        expect(todoReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle DELETE_TODO_SUCCEEDED', () => {
        const testState = {
            isLoading: true,
            todos: [testTodos[0], testTodos[1]],
        }
        const deleteAction = {
            type: types.DELETE_SUCCEEDED,
            payload: { id: 0 }
        }

        expect(todoReducer(testState, deleteAction)).toEqual({
            todos: [testTodos[1]],
            isLoading: false,
        })
    })
})

