import * as actions from '../todoActions'
import * as types from '../actionTypes'

const testTodos = [
    { id: 0, title: 'hello there', completed: false, },
    { id: 1, title: 'hay there', completed: true, },
]
const testError = 'something went wrong'

describe('Get todo actions', () => {
    it('should create a get todos request action', () => {
        const expectedAction = {
            type: types.GET_TODOS,
        }
        expect(actions.getTodos()).toEqual(expectedAction)
    })

    it('should create a get todos success action', () => {
        const expectedAction = {
            type: types.GET_TODOS_SUCCEEDED,
            payload: { todos: testTodos }
        }
        expect(actions.getTodosSucceeded(testTodos)).toEqual(expectedAction)
    })

    it('should create a get todos fail action', () => {
        const expectedAction = {
            type: types.GET_TODOS_FAILED,
            payload: { error: testError }
        }
        expect(actions.getTodosFailed(testError)).toEqual(expectedAction)
    })
})