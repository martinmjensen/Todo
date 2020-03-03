const GET_TODOS = 'GET_TODOS'

// Todo action creator

const getTodos = () => ({
    type: GET_TODOS
})

// Todo reducer

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todoReducer = (state = initialState, action) => {
    return state
}

export default todoReducer