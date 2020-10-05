import axios from 'axios';
import history from '../history';

var username = '';
export const postRegister = (name, email, collegeId, password, passwordConfirm) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/users/signUp',
            data: {
                name: name,
                email: email,
                collegeId: collegeId,
                password: password,
                passwordConfirm: passwordConfirm
            },
        });
        if (res.data.status === 'success') {
            console.log('Success', 'Registered Successfully');
            alert('Success\nRegistered Successfully');
            history.push('/login');
        }
        console.log(res);
    } catch (err) {
        console.log('error', err.response.data.message);
        alert('Error: ', err.response.data.message);
    }
}

export const postLogin = (email, password) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/users/login',
            data: {
                email: email,
                password: password,
            },
        });
        if (res.data.status === 'success') {
            console.log('Success', 'Logged in successfully');
            alert('Success\nLogged in successfully');
            localStorage.setItem('token', res.data.token);
            sessionStorage.setItem('token', res.data.token);
            history.push('/personaldetails');
        }
        console.log(res.data.data.user.name);
        username = res.data.data.user.name;
        console.log(username);
    } catch (err) {
        console.log('error', err.response.data.message);
        alert(err.response.data.message);
    }
}
export const postPersonalDetails = (firstname, middlename, lastname, collegeId,
    dateOfBirth, contact, contactParent, address, addressPermanent, profilePhoto) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/personaldetails',
                data: {
                    token: sessionStorage.getItem('token'),
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
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
        }
    }
export const postInternships = (semester, companyName, duration, domain, stipend, certificateUrl) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/internship',
            data: {
                token: sessionStorage.getItem('token'),
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
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        alert(err.response.data.message);
    }
}