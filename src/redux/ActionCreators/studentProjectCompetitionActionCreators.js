import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postStudentProjectCompetition = (year, competitionName, projectTitle, role, position, certificateUrl) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/coCurriculars/studentProject',
            data: {
                token: localStorage.getItem('token'),
                year: year,
                competitionName: competitionName,
                projectTitle: projectTitle,
                role: role,
                position: position,
                certificateUrl: certificateUrl
            },
        });
        if (res.data.status === 'success') {
            console.log(res.data.data)
            alert("Student Project Competition posted");
            dispatch(actions.reset('userStudentProjectCompetition'));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        alert(err.response.data.message);
        dispatch(actions.reset('userStudentProjectCompetition'));
    }
}
export const getStudentProjectCompetition = () => async (dispatch) => {
    try {
        dispatch(studentProjectCompetitionLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/coCurriculars',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addStudentProjectCompetition(res.data.data.user.studentProjects));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(studentProjectCompetitionFailed(err.response.data.message));
    }
}

export const studentProjectCompetitionLoading = () => ({
    type: ActionTypes.STUDENTPROJECTCOMPETITION_LOADING
});

export const studentProjectCompetitionFailed = (errmessage) => ({
    type: ActionTypes.STUDENTPROJECTCOMPETITION_FAILED,
    payload: errmessage
});

export const addStudentProjectCompetition = (studentProjectCompetition) => ({
    type: ActionTypes.GET_STUDENTPROJECTCOMPETITION,
    payload: studentProjectCompetition
});