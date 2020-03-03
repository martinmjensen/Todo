import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getTodos } from '../../actions/todoActions'
import TodoItem from './TodoItem/TodoItem'

const TodoContainer = () => {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    if (todo.isLoading) {
        return <h2>Loading todos...</h2>
    } else if (todo.error) {
        return <h2 style={{ color: 'red' }}>{todo.error}</h2>
    } else {
        return (
            <>
                {todo.todos.map(item => <TodoItem todo={item} key={item.id} />)}
            </>
        )
    }
}

export default TodoContainer