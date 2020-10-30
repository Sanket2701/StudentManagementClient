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
import AttendanceComponent from './Attendance/AttendanceComponent';
import Settings from './Settings/SettingsComponent';
import ExtraCurriculars from './Extra-Curriculars/Extra-curricularsComponent';
import {
    postRegister, postLogin, postInternships, postAcademics,
    postStudentBodyDetails, postStudentProjectCompetition, postStudentPublication, postExtraCurriculars,
    postAttendance, postProjectDetails, postOnlineCertifications
} from '../redux/actionCreators';
import { postPersonalDetails, getPersonalDetails } from '../redux/ActionCreators/personalDetailsActionCreators';
import { connect } from 'react-redux';
import history from '../redux/history';

const mapStateToProps = state => {
    return {
        personaldetails: state.personaldetails
    }
}


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
    postAcademics: (nameOfSchool, sscAggregate, nameOfJuniorCollege,
        hscAggregate, department, currentSemester, domainOfInterest, programmingLanguages) => dispatch(
            postAcademics(nameOfSchool, sscAggregate, nameOfJuniorCollege,
                hscAggregate, department, currentSemester, domainOfInterest, programmingLanguages)
        ),
    postInternships: (semester, companyName, duration, domain, stipend, certificateUrl) => dispatch(
        postInternships(semester, companyName, duration, domain, stipend, certificateUrl)
    ),
    postStudentBodyDetails: (year, name, post) => dispatch(
        postStudentBodyDetails(year, name, post)
    ),
    postStudentProjectCompetition: (year, competitionName, projectTitle, role, position, certificateUrl) => dispatch(
        postStudentProjectCompetition(year, competitionName, projectTitle, role, position, certificateUrl)
    ),
    postStudentPublication: (title, year, author, dateOfIssue, volume, pageNumber,
        publisher, ISBN, paperType, paperLevel, certificateUrl) => dispatch(
            postStudentPublication(title, year, author, dateOfIssue, volume, pageNumber,
                publisher, ISBN, paperType, paperLevel, certificateUrl)
        ),
    postExtraCurriculars: (semester, activity, levelActivity, position, certificateUrl) => dispatch(
        postExtraCurriculars(semester, activity, levelActivity, position, certificateUrl)
    ),
    postAttendance: (semester, tAttendance, praticalAttendance) => dispatch(
        postAttendance(semester, tAttendance, praticalAttendance)
    ),
    postProjectDetails: (semester, title, from, to, role, mentor, funded, investor,
        skillsDeveloped, certificateUrl) => dispatch(
            postProjectDetails(semester, title, from, to, role, mentor, funded, investor,
                skillsDeveloped, certificateUrl)
        ),
    postOnlineCertifications: (semester, platform, domain, title, from, to, certificateUrl) => dispatch(
        postOnlineCertifications(semester, platform, domain, title, from, to,
            certificateUrl)
    ),
    getPersonalDetails: () => { dispatch(getPersonalDetails()) }
});

class Main extends Component {

    componentDidMount() {
        this.props.getPersonalDetails();
    }

    render() {

        const HomePage = () => {
            return (
                <div>
                    <Home personaldetail={this.props.personaldetails.allPersonalDetails}
                        isLoading={this.props.personaldetails.isLoading}
                        isError={this.props.personaldetails.error} />
                </div>
            );
        }

        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/login" component={() => <Login postLogin={this.props.postLogin} />} />
                        <Route exact path="/register" component={() => <Register postRegister={this.props.postRegister} />} />
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/personaldetails" component={() => <PersonalDetails
                            postPersonalDetails={this.props.postPersonalDetails} />} />
                        <Route exact path="/academics" component={() => <Academics
                            postAcademics={this.props.postAcademics} />} />
                        <Route exact path="/internships" component={() => <Internship
                            postInternships={this.props.postInternships} />} />
                        <Route exact path="/projectdetails" component={() => <ProjectDetails
                            postProjectDetails={this.props.postProjectDetails} />} />
                        <Route exact path="/onlinecertifications" component={() => <OnlineCertification
                            postOnlineCertifications={this.props.postOnlineCertifications} />} />
                        <Route exact path="/co-curriculars" component={() => <CoCurriculars
                            postStudentBodyDetails={this.props.postStudentBodyDetails}
                            postStudentProjectCompetition={this.props.postStudentProjectCompetition}
                            postStudentPublication={this.props.postStudentPublication} />} />
                        <Route exact path="/extra-curriculars" component={() => <ExtraCurriculars
                            postExtraCurriculars={this.props.postExtraCurriculars} />} />
                        <Route exact path="/attendance" component={() => <AttendanceComponent
                            postAttendance={this.props.postAttendance} />} />
                        <Route exact path="/settings" component={Settings} />
                        <Redirect to="/login" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));