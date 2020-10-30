import axios from 'axios';
import { actions } from 'react-redux-form';
import * as ActionTypes from '../actionTypes';

var token = localStorage.getItem('token');

export const postPersonalDetails = (firstname, middlename, lastname, collegeId,
    dateOfBirth, contact, contactParent, address, addressPermanent, profilePhoto) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/personaldetails',
                // headers: {
                //     'Authorization': `Basic ${access_token}`
                // },
                data: {
                    token: localStorage.getItem('token'),
                    firstname: firstname,
                    middlename: middlename,
                    lastname: lastname,
                    collegeId: collegeId,
                    dateOfBirth: dateOfBirth,
                    contact: contact,
                    contactParent: contactParent,
                    address: address,
                    addressPermanent: addressPermanent,
                    profilePhoto: profilePhoto
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data)
                alert("Success");
                dispatch(actions.reset('userPersonalDetails'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userPersonalDetails'))
        }
    }
export const getPersonalDetails = () => async (dispatch) => {
    try {
        dispatch(personalDetailsLoading(true));
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/api/v1/personaldetails',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data.data);
            dispatch(addPersonalDetails(res.data.data));
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        dispatch(personalDetailsFailed(err.response.data.message));
    }
}

export const personalDetailsLoading = () => ({
    type: ActionTypes.PERSONALDETAILS_LOADING
});

export const personalDetailsFailed = (errmessage) => ({
    type: ActionTypes.PERSONALDETAILS_FAILED,
    payload: errmessage
});

export const addPersonalDetails = (personaldetails) => ({
    type: ActionTypes.GET_PERSONALDETAILS,
    payload: personaldetails
});