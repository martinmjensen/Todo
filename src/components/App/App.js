import React from 'react'
import { Provider } from 'react-redux'

import store from '../../redux/store'
import TodoContainer from '../Todo/TodoContainer'

const App = () => {
    return (
        <Provider store={store}>
            <h1>Todo, or not todo.</h1>
            <TodoContainer />
        </Provider>
    )
}

export default App