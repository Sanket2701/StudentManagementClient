import * as ActionTypes from '../actionTypes';

export const StudentProjectCompetitionReducer = (state = {
    isLoading: false,
    error: null,
    studentProjectCompetition: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_STUDENTPROJECTCOMPETITION:
            return { ...state, isLoading: false, error: null, studentProjectCompetition: action.payload };

        case ActionTypes.STUDENTPROJECTCOMPETITION_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.STUDENTPROJECTCOMPETITION_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}