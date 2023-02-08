import { TOGGLE_SORT } from "../actionTypes/actionTypes"

export const toggleSort = (sort_by) => {
    return {
        type: TOGGLE_SORT,
        payload: sort_by
    }
}