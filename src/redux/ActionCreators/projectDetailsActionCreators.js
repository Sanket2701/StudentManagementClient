import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postProjectDetails = (semester, title, from, to, role, mentor, funded, investor,
    skillsDeveloped, certificateUrl) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/project',
                data: {
                    token: localStorage.getItem('token'),
                    semester: semester,
                    title: title,
                    from: from,
                    to: to,
                    role: role,
                    mentor: mentor,
                    funded: funded,
                    investor: investor,
                    skillsDeveloped: skillsDeveloped,
                    certificateUrl: certificateUrl
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data)
                alert("Project Details posted");
                dispatch(actions.reset('userProjectDetails'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userProjectDetails'));
        }
    }
export const getProjectDetails = () => async (dispatch) => {
    try {
        dispatch(projectDetailsLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/project',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addProjectDetails(res.data.data.data));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(projectDetailsFailed(err.response.data.message));
    }
}

export const projectDetailsLoading = () => ({
    type: ActionTypes.PROJECTDETAILS_LOADING
});

export const projectDetailsFailed = (errmessage) => ({
    type: ActionTypes.PROJECTDETAILS_FAILED,
    payload: errmessage
});

export const addProjectDetails = (project) => ({
    type: ActionTypes.GET_PROJECTDETAILS,
    payload: project
});