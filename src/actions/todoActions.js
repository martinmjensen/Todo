import * as types from './actionTypes'

/* 
    Get todos
*/
export const getTodos = () => ({
    type: types.GET_TODOS,
})
export const getTodosSucceeded = todos => ({
    type: types.GET_TODOS_SUCCEEDED,
    payload: { todos }
})
export const getTodosFailed = error => ({
    type: types.GET_TODOS_FAILED,
    payload: { error }
})

/*  
    Delete todo
*/
export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    payload: { id }
})
export const deleteSucceeded = id => ({
    type: types.DELETE_SUCCEEDED,
    payload: { id }
})
export const deleteFailed = error => ({
    type: types.DELETE_FAILED,
    payload: { error }
})

/*  
    Toggle todo
*/
export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    payload: { id }
})
export const toggleSucceeded = todo => ({
    type: types.TOGGLE_SUCCEEDED,
    payload: { todo }
})
export const toggleFailed = error => ({
    type: types.TOGGLE_FAILED,
    payload: { error }
})

/*  
    Add todo
*/
export const addTodo = todo => ({
    type: types.ADD_TODO,
    payload: { todo }
})
export const addTodoSucceeded = todo => ({
    type: types.ADD_TODO_SUCCEEDED,
    payload: { todo }
})
export const addTodoFailed = error => ({
    type: types.ADD_TODO_FAILED,
    payload: { error }
})