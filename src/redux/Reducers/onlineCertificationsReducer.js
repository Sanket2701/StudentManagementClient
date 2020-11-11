import * as ActionTypes from '../actionTypes';

export const OnlineCertificationsReducer = (state = {
    isLoading: false,
    error: null,
    onlineCertifications: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_ONLINECERTIFICATIONS:
            return { ...state, isLoading: false, error: null, onlineCertifications: action.payload };

        case ActionTypes.ONLINECERTIFICATIONS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.ONLINECERTIFICATIONS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}