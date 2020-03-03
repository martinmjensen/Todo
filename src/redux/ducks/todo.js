/* 
    Get todos
*/
const GET_TODOS_REQUESTED = 'GET_TODOS_REQUESTED'

export const getTodos = () => ({ type: GET_TODOS_REQUESTED })

/* 
    Todo reducer
*/
const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todoReducer = (state = initialState, action) => {
    return state
}

export default todoReducer