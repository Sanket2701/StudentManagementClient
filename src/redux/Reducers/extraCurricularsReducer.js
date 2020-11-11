import * as ActionTypes from '../actionTypes';

export const ExtraCurricularsReducer = (state = {
    isLoading: false,
    error: null,
    extraCurriculars: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_EXTRACURRICULARS:
            return { ...state, isLoading: false, error: null, extraCurriculars: action.payload };

        case ActionTypes.EXTRACURRICULARS_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.EXTRACURRICULARS_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}