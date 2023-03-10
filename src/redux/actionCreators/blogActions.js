import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

export const getBlogs = (blogs) => {
    return {
        type: GET_CONTENT,
        payload: blogs
    }
}

export const createBlog = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog
    }
}

export const updateBlog = (blog) => {
    return {
        type: UPDATE_CONTENT,
        payload: blog
    }
}

export const deleteBlog = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog
    }
}