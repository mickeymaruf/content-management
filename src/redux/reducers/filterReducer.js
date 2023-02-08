import { TOGGLE_SORT } from "../actionTypes/actionTypes";

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

        default:
            return state;
    }
}

export default filterReducer;