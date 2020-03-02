import { createStore, combineReducers } from 'redux';

const todoReducer = (state = {}, action) => {
    return state;
}

const rootReducer = combineReducers({
    todoReducer
})

const store = createStore(rootReducer);

export default store;