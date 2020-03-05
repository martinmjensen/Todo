import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../../actions/todoActions'
import TodoItem from '../TodoItem/TodoItem'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import SectionHeader from '../../SectionHeader/SectionHeader'

const TodoContainer = () => {
    const list = useSelector(state => state.todo)
    const dispatch = useDispatch()

    // Get todos after component mounts
    useEffect(() => { dispatch(actions.getTodos()) }, [])

    // Event handlers
    const handleAdd = title => { dispatch(actions.addTodo({ title, completed: false, })) }
    const handleDelete = id => { dispatch(actions.deleteTodo(id)) }
    const handleToggle = id => { dispatch(actions.toggleTodo(id)) }

    const noTodos = list.todos.length > 0 ? false : true

    // Content of the page before todos are fetched
    let componentContent = <p className='loading-text'>Ingen todos :) Lag din første!</p>

    if (list.isLoading && noTodos) {
        componentContent = <p className='loading-text'>Loading...</p>
    } else if (!noTodos) {
        componentContent = (
            <TodoList>
                <SectionHeader title='Dine todos'>
                    <div style={{ opacity: (list.isLoading ? '1' : '0') }} className='spinner'></div>
                </SectionHeader>
                {list.error &&
                    <p className='error-text'>Hmm... Det skjedde dessverre en feil.</p>
                }

                {list.todos.map(item => (
                    <TodoItem
                        todo={item}
                        key={item.id}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))}
            </TodoList>
        )
    }

    return (
        <main>
            <TodoForm handleAdd={handleAdd} />
            {componentContent}
        </main>
    )
}

export default TodoContainer