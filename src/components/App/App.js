import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store/store'
import Header from '../Header/Header'
import TodoContainer from '../Todo/TodoContainer'

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <TodoContainer />
        </Provider>
    )
}

export default App