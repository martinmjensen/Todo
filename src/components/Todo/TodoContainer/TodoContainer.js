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

    useEffect(() => { dispatch(actions.getTodos()) }, [])

    const handleAdd = title => { dispatch(actions.addTodo({ title, completed: false, })) }
    const handleDelete = id => { dispatch(actions.deleteTodo(id)) }
    const handleToggle = id => { dispatch(actions.toggleTodo(id)) }

    let componentContent = <p className='loading-text'>Loading todos...</p>

    if (!list.isLoading) {
        componentContent = (
            <TodoList>
                <SectionHeader title='Dine todos'>
                    <div style={{ opacity: (list.isWorking ? '1' : '0') }} className='spinner'></div>
                </SectionHeader>
                {list.error && <p className='error-text'>Hmm... noe gikk galt her</p>}
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