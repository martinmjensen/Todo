import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../../redux/ducks/todo'
// import todoService from '../../todoService'

const TodoContainer = () => {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        null
    )
}

export default TodoContainer