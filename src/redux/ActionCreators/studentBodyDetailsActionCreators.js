import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postStudentBodyDetails = (year, name, post) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/coCurriculars/studentBody',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                year: year,
                name: name,
                post: post
            },
        });
        if (res.data.status === 'success') {
            console.log(res.data.data)
            alert("Student Body Details posted");
            dispatch(actions.reset('userStudentBodyDetails'));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        alert(err.response.data.message);
        dispatch(actions.reset('userStudentBodyDetails'));
    }
}
export const getStudentBodyDetails = () => async (dispatch) => {
    try {
        dispatch(studentBodyDetailsLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/coCurriculars',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addStudentBodyDetails(res.data.data.user.studentBodies));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(studentBodyDetailsFailed(err.response.data.message));
    }
}

export const studentBodyDetailsLoading = () => ({
    type: ActionTypes.STUDENTBODYDETAILS_LOADING
});

export const studentBodyDetailsFailed = (errmessage) => ({
    type: ActionTypes.STUDENTBODYDETAILS_FAILED,
    payload: errmessage
});

export const addStudentBodyDetails = (studentBodyDetails) => ({
    type: ActionTypes.GET_STUDENTBODYDETAILS,
    payload: studentBodyDetails
});