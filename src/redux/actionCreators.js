import axios from 'axios';
import history from './history';
import { actions } from 'react-redux-form';

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
            console.log(localStorage.getItem('token'));
            localStorage.setItem('username', res.data.data.user.name);
            history.push('/home');
        }
    } catch (err) {
        console.log('error', err.response.data.message);
        alert(err.response.data.message);
    }
}
// export const postPointers = (semester, gpa, certificateUrl) => async (dispatch) => {
//     try {
//         const res = await axios({
//             method: 'POST',
//             url: 'http://127.0.0.1:5000/api/v1/users/attendance',
//             data: {
//                 token: localStorage.getItem('token'),
//                 semester: semester,
//                 theoryAttendance: tAttendance,
//                 praticalAttendance: praticalAttendance
//             },
//         });
//         if (res.data.status === 'success') {
//             console.log(res.data.data)
//             alert("Student Attendance posted");
//             dispatch(actions.reset('userAttendance'));
//         }
//     } catch (err) {
//         console.log('error', err.response.data.message);
//         alert(err.response.data.message);
//         dispatch(actions.reset('userAttendance'));
//     }
// }