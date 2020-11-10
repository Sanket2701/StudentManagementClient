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
export const postStudentBodyDetails = (year, name, post) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/v1/coCurriculars/studentBody',
            data: {
                token: localStorage.getItem('token'),
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
export const postExtraCurriculars = (semester, activity, levelActivity, position, certificateUrl) =>
    async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/extraCurriculars',
                data: {
                    token: localStorage.getItem('token'),
                    semester: semester,
                    activity: activity,
                    levelActivity: levelActivity,
                    position: position,
                    certificateUrl: certificateUrl
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data)
                alert("Student Extra-Curriculars posted");
                dispatch(actions.reset('userExtraCurriculars'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userExtraCurriculars'));
        }
    }

export const postAttendance = (semester, tAttendance, praticalAttendance) =>
    async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/users/attendance',
                data: {
                    token: localStorage.getItem('token'),
                    semester: semester,
                    theoryAttendance: tAttendance,
                    praticalAttendance: praticalAttendance
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data)
                alert("Student Attendance posted");
                dispatch(actions.reset('userAttendance'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userAttendance'));
        }
    }

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

export const postOnlineCertifications = (semester, platform, domain, title, from, to,
    certificateUrl) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/v1/onlineCertification',
                data: {
                    token: localStorage.getItem('token'),
                    sem: semester,
                    platform: platform,
                    domain: domain,
                    title: title,
                    from: from,
                    to: to,
                    certificateUrl: certificateUrl
                },
            });
            if (res.data.status === 'success') {
                console.log(res.data.data);
                alert("Online Certification posted");
                dispatch(actions.reset('userOnlineCertification'));
            }
        } catch (err) {
            console.log('error', err.response.data.message);
            alert(err.response.data.message);
            dispatch(actions.reset('userOnlineCertification'));
        }
    }