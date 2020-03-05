import React, { useState } from 'react'

import SectionHeader from '../../SectionHeader/SectionHeader'
import './TodoForm.scss'

const TodoForm = ({ handleAdd }) => {
    const [title, setTitle] = useState('')

    // Event handlers
    const handleChange = event => { setTitle(event.target.value) }
    const handleSubmit = event => {
        event.preventDefault()
        if (title) {
            handleAdd(title)
            setTitle('') // Reset input value when form is submitted
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
                    placeholder='Legg til en ny todo'
                    aria-label='Ny todo tekst' />
                <button type='submit'>Legg til</button>
            </form>
        </section>
    )
}

export default React.memo(TodoForm)