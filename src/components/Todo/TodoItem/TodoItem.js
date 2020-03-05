import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './TodoItem.scss'

const TodoItem = ({ todo, handleDelete, handleToggle }) => {
    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 400 }
    })

    const handleChange = () => {
        handleToggle(todo.id)
    }

    return (
        <animated.div className={`todo-item ${todo.completed ? 'checked' : ''}`} style={fade}>
            <div className='checkbox-container'>
                <input id={todo.id} type='checkbox' onChange={handleChange} checked={todo.completed} />
                <label htmlFor={todo.id}>{todo.title}</label>
            </div>
            <button onClick={() => handleDelete(todo.id)} aria-label='Delete todo'>
                <span className='mdiv'>
                    <span className='md'></span>
                </span>
            </button>
        </animated.div>
    )
}

export default React.memo(TodoItem)