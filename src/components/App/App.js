import React, { Component } from 'react';
import todoService from '../../todoService';
import store from '../../redux/store'
import { Provider } from 'react-redux'

const getTodos = async () => {
  return await todoService.getTodos();
}

class App extends Component {

  componentDidMount() {
    getTodos().then(todos => console.log(todos));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Todo, or not todo.</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
