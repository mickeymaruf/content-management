import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";


const initialState = {
    blogs: [],
    history: []
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                blogs: action.payload
            }
        case ADD_CONTENT:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                blogs: [
                    ...state.blogs.filter(blog => blog._id !== action.payload._id),
                    action.payload
                ]
            }
        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }

        case ADD_TO_HISTORY:
            if (state.history.find(blog => blog._id === action.payload._id)) {
                return {
                    ...state,
                    history: [action.payload, ...state.history.filter(blog => blog._id !== action.payload._id)]
                }
            }
            return {
                ...state,
                history: [...state.history, action.payload]
            }

        default:
            return state;
    }
}

export default blogReducer;