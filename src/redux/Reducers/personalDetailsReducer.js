import * as ActionTypes from '../actionTypes';

export const PersonalDetailsReducer = (state = {
    isLoading: false,
    error: null,
    allPersonalDetails: null
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_PERSONALDETAILS:
            return { ...state, isLoading: false, error: null, allPersonalDetails: action.payload };

        case ActionTypes.PERSONALDETAILS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.PERSONALDETAILS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}