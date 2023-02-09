import { TOGGLE_SORT, TOGGLE_TAG } from "../actionTypes/actionTypes";

const initialState = {
    sortBy: "last_upload",
    tags: []
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SORT:
            return {
                ...state,
                sortBy: action.payload
            }
        case TOGGLE_TAG:
            if (state.tags.includes(action.payload)) {
                return {
                    ...state,
                    tags: state.tags.filter(tag => tag !== action.payload)
                }
            }
            return {
                ...state,
                tags: [...state.tags, action.payload]
            }

        default:
            return state;
    }
}

export default filterReducer;