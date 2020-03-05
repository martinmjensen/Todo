import React from 'react'
import PropTypes from 'prop-types'

import './TodoList.scss'

const TodoList = ({ children }) => (
    <section className='list-container'>
        {children}
    </section>
)

TodoList.propTypes = {
    children: PropTypes.node,
}

export default TodoList