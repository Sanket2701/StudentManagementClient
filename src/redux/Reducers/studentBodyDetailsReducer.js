import * as ActionTypes from '../actionTypes';

export const StudentBodyDetailsReducer = (state = {
    isLoading: false,
    error: null,
    studentBodyDetails: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_STUDENTBODYDETAILS:
            return { ...state, isLoading: false, error: null, studentBodyDetails: action.payload };

        case ActionTypes.STUDENTBODYDETAILS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.STUDENTBODYDETAILS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}