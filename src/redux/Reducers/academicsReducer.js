import * as ActionTypes from '../actionTypes';

export const AcademicsReducer = (state = {
    isLoading: false,
    error: null,
    academics: null
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_ACADEMICS:
            return { ...state, isLoading: false, error: null, academics: action.payload };

        case ActionTypes.ACADEMICS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.ACADEMICS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}