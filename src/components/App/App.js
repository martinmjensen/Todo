import React from 'react'

import Header from '../Header/Header'
import TodoContainer from '../Todo/TodoContainer/TodoContainer'

const App = () => {
    return (
        <div className='page-container'>
            <Header />
            <TodoContainer />
        </div>
    )
}

export default App