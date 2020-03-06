import { call, put } from 'redux-saga/effects'
import { getTodos } from '../todoSaga'
import todoService from '../../todoService'
import * as actions from '../../actions/todoActions'

describe('test sagas', () => {
    it('getTodos() yields an effect call and puts an succeeded action', () => {
        const iterator = getTodos()
        expect(
            iterator.next().value
        ).toEqual(
            call(todoService.getTodos)
        )

        const mockTodos = []
        expect(
            iterator.next(mockTodos).value
        ).toEqual(
            put(actions.getTodosSucceeded(mockTodos))
        )
    })
})