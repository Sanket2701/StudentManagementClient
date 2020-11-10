import * as ActionTypes from '../actionTypes';

export const InternshipsReducer = (state = {
    isLoading: false,
    error: null,
    internships: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_INTERNSHIPS:
            return { ...state, isLoading: false, error: null, internships: action.payload };

        case ActionTypes.INTERNSHIPS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.INTERNSHIPS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}