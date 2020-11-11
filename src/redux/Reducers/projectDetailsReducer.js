import * as ActionTypes from '../actionTypes';

export const ProjectDetailsReducer = (state = {
    isLoading: false,
    error: null,
    projectDetails: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_PROJECTDETAILS:
            return { ...state, isLoading: false, error: null, projectDetails: action.payload };

        case ActionTypes.PROJECTDETAILS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.PROJECTDETAILS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}