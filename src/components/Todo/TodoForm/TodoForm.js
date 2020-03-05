import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import SectionHeader from '../../SectionHeader/SectionHeader'
import { addTodo } from '../../../actions/todoActions'
import './TodoForm.scss'

const TodoForm = (props) => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        if (title) {
            dispatch(addTodo({ title, completed: false, }))
            setTitle('')
        }
    }

    return (
        <section className='form-container'>
            <SectionHeader title='Ny Todo' />
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    className='todo-text'
                    type='text'
                    name='Todo text'
                    value={title}
                    onChange={handleChange}
                    placeholder='Legg til en ny todo' />
                <button type='submit'>Legg til</button>
            </form>
        </section>
    )
}

export default TodoForm