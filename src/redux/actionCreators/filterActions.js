import { TOGGLE_SORT, TOGGLE_TAG } from "../actionTypes/actionTypes"

export const toggleSort = (sort_by) => {
    return {
        type: TOGGLE_SORT,
        payload: sort_by
    }
}

export const toggleTag = (tag) => {
    return {
        type: TOGGLE_TAG,
        payload: tag
    }
}