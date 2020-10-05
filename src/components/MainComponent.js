import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, Router } from 'react-router-dom';
import Login from './Login/LoginComponent';
import Register from './Register/RegisterComponent';
import Home from './Home/HomeComponent';
import PersonalDetails from './PersonalDetails/PersonalDetailsComponent';
import Academics from './Academics/AcademicsComponent';
import Internship from './Internships/InternshipsComponent';
import ProjectDetails from './ProjectDetails/ProjectDetailsComponent';
import OnlineCertification from './OnlineCertifications/OnlineCertificationsComponent';
import CoCurriculars from './Co-curriculars/Co-curricularsComponent';
import Attendance from './Attendance/AttendanceComponent';
import Settings from './Settings/SettingsComponent';
import ExtraCurriculars from './Extra-Curriculars/Extra-curricularsComponent';
import { postRegister, postLogin, postPersonalDetails, postInternships } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import history from '../history';

const mapDispatchToProps = (dispatch) => ({
    postRegister: (name, email, collegeId, password, passwordConfirm) => dispatch(
        postRegister(name, email, collegeId, password, passwordConfirm)
    ),
    postLogin: (email, password) => dispatch(
        postLogin(email, password)
    ),
    postPersonalDetails: (firstname, middlename, lastname, collegeId,
        department, dateOfBirth, contact, contactParent, address, addressPermanent, profilePhoto) => dispatch(
            postPersonalDetails(firstname, middlename, lastname, collegeId,
                department, dateOfBirth, contact, contactParent, address, addressPermanent, profilePhoto)
        ),
    resetPersonalDetailsForm: () => { dispatch(actions.reset('userPersonalDetails')) },
    postInternships: (semester, companyName, duration, domain, stipend, certificateUrl) => dispatch(
        postInternships(semester, companyName, duration, domain, stipend, certificateUrl)
    ),
    resetInternshipsForm: () => { dispatch(actions.reset('userInternships')) }
});

class Main extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/login" component={() => <Login postLogin={this.props.postLogin} />} />
                        <Route exact path="/register" component={() => <Register postRegister={this.props.postRegister} />} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/personaldetails" component={() => <PersonalDetails
                            postPersonalDetails={this.props.postPersonalDetails}
                            resetPersonalDetailsForm={this.props.resetPersonalDetailsForm} />} />
                        <Route exact path="/academics" component={Academics} />
                        <Route exact path="/internships" component={() => <Internship
                            postInternships={this.props.postInternships}
                            resetInternshipsForm={this.props.resetInternshipsForm} />} />
                        <Route exact path="/projectdetails" component={ProjectDetails} />
                        <Route exact path="/onlinecertifications" component={OnlineCertification} />
                        <Route exact path="/co-curriculars" component={CoCurriculars} />
                        <Route exact path="/extra-curriculars" component={ExtraCurriculars} />
                        <Route exact path="/attendance" component={Attendance} />
                        <Route exact path="/settings" component={Settings} />
                        <Redirect to="/login" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));