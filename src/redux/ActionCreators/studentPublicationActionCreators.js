import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postStudentPublication = (title, year, author, dateOfIssue, volume, pageNumber,
    publisher, ISBN, paperType, paperLevel, certificateUrl) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/coCurriculars/studentPublication',
                data: {
                    token: localStorage.getItem('token'),
                    title: title,
                    year: year,
                    author: author,
                    dateOfIssue: dateOfIssue,
                    volume: volume,
                    pageNumber: pageNumber,
                    publisher: publisher,
                    ISBN: ISBN,
                    paperType: paperType,
                    paperLevel: paperLevel,
                    certificateUrl: certificateUrl
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data)
                alert("Student Publication posted");
                dispatch(actions.reset('userStudentPublication'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userStudentPublication'));
        }
    }

export const getStudentPublication = () => async (dispatch) => {
    try {
        dispatch(studentPublicationLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/coCurriculars',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addStudentPublication(res.data.data.user.studentPublications));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(studentPublicationFailed(err.response.data.message));
    }
}

export const studentPublicationLoading = () => ({
    type: ActionTypes.STUDENTPUBLICATION_LOADING
});

export const studentPublicationFailed = (errmessage) => ({
    type: ActionTypes.STUDENTPUBLICATION_FAILED,
    payload: errmessage
});

export const addStudentPublication = (studentPublication) => ({
    type: ActionTypes.GET_STUDENTPUBLICATION,
    payload: studentPublication
});