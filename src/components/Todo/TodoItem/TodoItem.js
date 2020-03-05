import React from 'react'
import { useSpring, animated } from 'react-spring'

import './TodoItem.scss'

const TodoItem = ({ todo, handleDelete, handleToggle }) => {
    // Fade animation on mounting
    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 400 }
    })

    // Event handlers
    const handleChange = () => { handleToggle(todo.id) }
    const handleClick = () => { handleDelete(todo.id) }

    return (
        <animated.div
            className={`todo-item ${todo.completed ? 'checked' : ''}`}
            style={fade}
            aria-label={`Todo ${todo.id}`}
        >
            <div className='checkbox-container'>
                <input id={todo.id} type='checkbox' onChange={handleChange} checked={todo.completed} />
                <label htmlFor={todo.id}>{todo.title}</label>
            </div>
            <button onClick={handleClick} aria-label='Delete todo'>
                <span className='cross-container'>
                    <span className='cross'></span>
                </span>
            </button>
        </animated.div>
    )
}

export default React.memo(TodoItem)