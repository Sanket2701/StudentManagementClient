import * as ActionTypes from '../actionTypes';

export const AttendanceReducer = (state = {
    isLoading: false,
    error: null,
    attendance: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_ATTENDANCE:
            return { ...state, isLoading: false, error: null, attendance: action.payload };

        case ActionTypes.ATTENDANCE_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.ATTENDANCE_FAILED:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}