import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getTodos, deleteTodo, toggleTodo } from '../../../actions/todoActions'
import TodoItem from '../TodoItem/TodoItem'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import SectionHeader from '../../SectionHeader/SectionHeader'

const TodoContainer = () => {
    const list = useSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const handleDelete = id => dispatch(deleteTodo(id))
    const handleToggle = id => dispatch(toggleTodo(id))

    let todoList = null

    if (list.isLoading) {
        todoList = <p className='loading-text'>Loading todos...</p>
    } else {
        const allTodos = list.todos.map(item => (
            <TodoItem
                todo={item}
                key={item.id}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        ))

        todoList = (
            <TodoList>
                <SectionHeader title='Dine todos' loading={list.isWorking} />
                {list.error &&
                    <p className='error-text'>Hmm... noe gikk galt her</p>
                }
                {allTodos}
            </TodoList>
        )
    }

    return (
        <main>
            <TodoForm />
            {todoList}
        </main>
    )
}

export default TodoContainer