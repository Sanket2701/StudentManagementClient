import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postAcademics = (nameOfSchool, sscAggregate, nameOfJuniorCollege,
    hscAggregate, department, currentSemester, domainOfInterest, programmingLanguages) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/academics',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                data: {
                    nameOfSchool: nameOfSchool,
                    sscAggregate: sscAggregate,
                    nameOfJuniorCollege: nameOfJuniorCollege,
                    hscAggregate: hscAggregate,
                    department: department,
                    currentSemester: currentSemester,
                    domainOfInterest: domainOfInterest,
                    programmingLanguages: programmingLanguages,
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data)
                alert("Success");
                dispatch(actions.reset('userAcademics'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userAcademics'));
        }
    }
export const getAcademics = () => async (dispatch) => {
    try {
        dispatch(academicsLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/academics',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addAcademics(res.data.data));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(academicsFailed(err.response.data.message));
    }
}

export const academicsLoading = () => ({
    type: ActionTypes.ACADEMICS_LOADING
});

export const academicsFailed = (errmessage) => ({
    type: ActionTypes.ACADEMICS_FAILED,
    payload: errmessage
});

export const addAcademics = (academics) => ({
    type: ActionTypes.GET_ACADEMICS,
    payload: academics
});