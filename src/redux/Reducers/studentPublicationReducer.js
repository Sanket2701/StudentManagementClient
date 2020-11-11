import * as ActionTypes from '../actionTypes';

export const StudentPublicationReducer = (state = {
    isLoading: false,
    error: null,
    studentPublication: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_STUDENTPUBLICATION:
            return { ...state, isLoading: false, error: null, studentPublication: action.payload };

        case ActionTypes.STUDENTPUBLICATION_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.STUDENTPUBLICATION_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}