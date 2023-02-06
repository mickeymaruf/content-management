import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

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

export const deleteBlog = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}