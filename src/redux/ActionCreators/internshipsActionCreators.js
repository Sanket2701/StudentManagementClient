import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postInternships = (semester, companyName, duration, domain, stipend, certificateUrl) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/internship',
            data: {
                token: localStorage.getItem('token'),
                semester: semester,
                companyName: companyName,
                duration: duration,
                domain: domain,
                stipend: stipend,
                certificateUrl: certificateUrl
            },
        });
        if (res.data.status === 'success') {
            console.log(res.data.data)
            alert("Internship posted");
            dispatch(actions.reset('userInternships'));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        alert(err.response.data.message);
        dispatch(actions.reset('userInternships'));
    }
}
export const getInternships = () => async (dispatch) => {
    try {
        dispatch(internshipsLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/internship',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addInternships(res.data.data.data));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(internshipsFailed(err.response.data.message));
    }
}

export const internshipsLoading = () => ({
    type: ActionTypes.INTERNSHIPS_LOADING
});

export const internshipsFailed = (errmessage) => ({
    type: ActionTypes.INTERNSHIPS_FAILED,
    payload: errmessage
});

export const addInternships = (internships) => ({
    type: ActionTypes.GET_INTERNSHIPS,
    payload: internships
});