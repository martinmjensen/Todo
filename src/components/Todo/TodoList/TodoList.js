import React from 'react'

import './TodoList.scss'

const TodoList = ({ children }) => (
    <section className='list-container'>
        {children}
    </section>
)

export default TodoList