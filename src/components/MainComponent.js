import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, Router } from "react-router-dom";
import Login from "./Login/LoginComponent";
import Register from "./Register/RegisterComponent";
import Home from "./Home/HomeComponent";
import PersonalDetails from "./PersonalDetails/PersonalDetailsComponent";
import Academics from "./Academics/AcademicsComponent";
import Internship from "./Internships/InternshipsComponent";
import ProjectDetails from "./ProjectDetails/ProjectDetailsComponent";
import OnlineCertification from "./OnlineCertifications/OnlineCertificationsComponent";
import CoCurriculars from "./Co-curriculars/Co-curricularsComponent";
import AttendanceComponent from "./Attendance/AttendanceComponent";
import Settings from "./Settings/SettingsComponent";
import ExtraCurriculars from "./Extra-Curriculars/Extra-curricularsComponent";
import ForgotPasswordComponent from "./Login/ForgotPasswordComponent";
import ResetPasswordComponent from "./Login/ResetPasswordComponent";
import {
  postRegister,
  postLogin,
  changePassword,
  forgotPassword,
  resetPassword,
} from "../redux/actionCreators";
import {
  postPersonalDetails,
  getPersonalDetails,
  patchPersonalDetails,
} from "../redux/ActionCreators/personalDetailsActionCreators";
import {
  postAcademics,
  getAcademics,
  patchAcademics,
} from "../redux/ActionCreators/academicsActionCreators";
import {
  postInternships,
  getInternships,
  patchInternships,
  deleteInternships,
} from "../redux/ActionCreators/internshipsActionCreators";
import {
  postProjectDetails,
  getProjectDetails,
  patchProjectDetails,
  deleteProjectDetails,
} from "../redux/ActionCreators/projectDetailsActionCreators";
import {
  postOnlineCertifications,
  getOnlineCerifications,
  patchOnlineCertifications,
  deleteOnlineCertifications,
} from "../redux/ActionCreators/onlineCertificationsActionCreators";
import {
  postStudentBodyDetails,
  getStudentBodyDetails,
  patchStudentBodyDetails,
  deleteStudentBodyDetails,
} from "../redux/ActionCreators/studentBodyDetailsActionCreators";
import {
  postStudentProjectCompetition,
  getStudentProjectCompetition,
  patchStudentProjectCompetition,
  deleteStudentProjectCompetition,
} from "../redux/ActionCreators/studentProjectCompetitionActionCreators";
import {
  postStudentPublication,
  getStudentPublication,
  patchStudentPublication,
  deleteStudentPublication,
} from "../redux/ActionCreators/studentPublicationActionCreators";
import {
  postExtraCurriculars,
  getExtraCurriculars,
  patchExtraCurriculars,
  deleteExtraCurriculars,
} from "../redux/ActionCreators/extraCurricularsActionCreators";
import {
  postAttendance,
  getAttendance,
  patchAttendance,
  deleteAttendance,
} from "../redux/ActionCreators/attendanceActionCreators";
import { postPointers } from "../redux/ActionCreators/pointersActionCreators";
import { connect } from "react-redux";
import history from "../redux/history";

const mapStateToProps = (state) => {
  return {
    personaldetails: state.personaldetails,
    internships: state.internships,
    academics: state.academics,
    projectDetails: state.projectDetails,
    onlineCertifications: state.onlineCertifications,
    studentBodyDetails: state.studentBodyDetails,
    studentProjectCompetition: state.studentProjectCompetition,
    studentPublication: state.studentPublication,
    extraCurriculars: state.extraCurriculars,
    attendance: state.attendance,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postRegister: (name, email, collegeId, password, passwordConfirm) =>
    dispatch(postRegister(name, email, collegeId, password, passwordConfirm)),
  postLogin: (email, password) => dispatch(postLogin(email, password)),
  changePassword: (passwordCurent, password, passwordConfirm) =>
    dispatch(changePassword(passwordCurent, password, passwordConfirm)),
  forgotPassword: (email) => dispatch(forgotPassword(email)),
  resetPassword: (resetToken, password, passwordConfirm) =>
    dispatch(resetPassword(resetToken, password, passwordConfirm)),
  postPersonalDetails: (
    firstname,
    middlename,
    lastname,
    collegeId,
    department,
    dateOfBirth,
    contact,
    contactParent,
    address,
    addressPermanent,
    profilePhoto
  ) =>
    dispatch(
      postPersonalDetails(
        firstname,
        middlename,
        lastname,
        collegeId,
        department,
        dateOfBirth,
        contact,
        contactParent,
        address,
        addressPermanent,
        profilePhoto
      )
    ),
  postAcademics: (
    nameOfSchool,
    sscAggregate,
    nameOfJuniorCollege,
    hscAggregate,
    department,
    currentSemester,
    domainOfInterest,
    programmingLanguages
  ) =>
    dispatch(
      postAcademics(
        nameOfSchool,
        sscAggregate,
        nameOfJuniorCollege,
        hscAggregate,
        department,
        currentSemester,
        domainOfInterest,
        programmingLanguages
      )
    ),
  postInternships: (
    semester,
    companyName,
    duration,
    domain,
    stipend,
    certificateUrl
  ) =>
    dispatch(
      postInternships(
        semester,
        companyName,
        duration,
        domain,
        stipend,
        certificateUrl
      )
    ),
  postStudentBodyDetails: (year, name, post) =>
    dispatch(postStudentBodyDetails(year, name, post)),
  postStudentProjectCompetition: (
    year,
    competitionName,
    projectTitle,
    role,
    position,
    certificateUrl
  ) =>
    dispatch(
      postStudentProjectCompetition(
        year,
        competitionName,
        projectTitle,
        role,
        position,
        certificateUrl
      )
    ),
  postStudentPublication: (
    title,
    year,
    author,
    dateOfIssue,
    volume,
    pageNumber,
    publisher,
    ISBN,
    paperType,
    paperLevel,
    certificateUrl
  ) =>
    dispatch(
      postStudentPublication(
        title,
        year,
        author,
        dateOfIssue,
        volume,
        pageNumber,
        publisher,
        ISBN,
        paperType,
        paperLevel,
        certificateUrl
      )
    ),
  postExtraCurriculars: (
    semester,
    activity,
    levelActivity,
    position,
    certificateUrl
  ) =>
    dispatch(
      postExtraCurriculars(
        semester,
        activity,
        levelActivity,
        position,
        certificateUrl
      )
    ),
  postAttendance: (semester, tAttendance, praticalAttendance) =>
    dispatch(postAttendance(semester, tAttendance, praticalAttendance)),
  postProjectDetails: (
    semester,
    title,
    from,
    to,
    role,
    mentor,
    funded,
    investor,
    skillsDeveloped,
    certificateUrl
  ) =>
    dispatch(
      postProjectDetails(
        semester,
        title,
        from,
        to,
        role,
        mentor,
        funded,
        investor,
        skillsDeveloped,
        certificateUrl
      )
    ),
  postOnlineCertifications: (
    semester,
    platform,
    domain,
    title,
    from,
    to,
    certificateUrl
  ) =>
    dispatch(
      postOnlineCertifications(
        semester,
        platform,
        domain,
        title,
        from,
        to,
        certificateUrl
      )
    ),
  patchPersonalDetails: (
    id,
    firstname,
    middlename,
    lastname,
    collegeId,
    department,
    dateOfBirth,
    contact,
    contactParent,
    address,
    addressPermanent,
    profilePhoto
  ) =>
    dispatch(
      patchPersonalDetails(
        id,
        firstname,
        middlename,
        lastname,
        collegeId,
        department,
        dateOfBirth,
        contact,
        contactParent,
        address,
        addressPermanent,
        profilePhoto
      )
    ),
  postPointers: (semester, gpa, certificateUrl) =>
    dispatch(postPointers(semester, gpa, certificateUrl)),
  patchInternships: (
    id,
    semester,
    companyName,
    duration,
    domain,
    stipend,
    certificateUrl
  ) =>
    dispatch(
      patchInternships(
        id,
        semester,
        companyName,
        duration,
        domain,
        stipend,
        certificateUrl
      )
    ),
  patchAcademics: (
    id,
    nameOfSchool,
    sscAggregate,
    nameOfJuniorCollege,
    hscAggregate,
    department,
    currentSemester,
    domainOfInterest,
    programmingLanguages
  ) =>
    dispatch(
      patchAcademics(
        id,
        nameOfSchool,
        sscAggregate,
        nameOfJuniorCollege,
        hscAggregate,
        department,
        currentSemester,
        domainOfInterest,
        programmingLanguages
      )
    ),
  patchProjectDetails: (
    id,
    semester,
    title,
    from,
    to,
    role,
    mentor,
    funded,
    investor,
    skillsDeveloped,
    certificateUrl
  ) =>
    dispatch(
      patchProjectDetails(
        id,
        semester,
        title,
        from,
        to,
        role,
        mentor,
        funded,
        investor,
        skillsDeveloped,
        certificateUrl
      )
    ),
  patchExtraCurriculars: (
    id,
    semester,
    activity,
    levelActivity,
    position,
    certificateUrl
  ) =>
    dispatch(
      patchExtraCurriculars(
        id,
        semester,
        activity,
        levelActivity,
        position,
        certificateUrl
      )
    ),
  patchOnlineCertifications: (
    id,
    semester,
    platform,
    domain,
    title,
    from,
    to,
    certificateUrl
  ) =>
    dispatch(
      patchOnlineCertifications(
        id,
        semester,
        platform,
        domain,
        title,
        from,
        to,
        certificateUrl
      )
    ),
  patchAttendance: (id, semester, tAttendance, praticalAttendance) =>
    dispatch(patchAttendance(id, semester, tAttendance, praticalAttendance)),
  patchStudentBodyDetails: (id, year, name, post) =>
    dispatch(patchStudentBodyDetails(id, year, name, post)),
  patchStudentProjectCompetition: (
    id,
    year,
    competitionName,
    projectTitle,
    role,
    position,
    certificateUrl
  ) =>
    dispatch(
      patchStudentProjectCompetition(
        id,
        year,
        competitionName,
        projectTitle,
        role,
        position,
        certificateUrl
      )
    ),
  patchStudentPublication: (
    id,
    title,
    year,
    author,
    dateOfIssue,
    volume,
    pageNumber,
    publisher,
    ISBN,
    paperType,
    paperLevel,
    certificateUrl
  ) =>
    dispatch(
      patchStudentPublication(
        id,
        title,
        year,
        author,
        dateOfIssue,
        volume,
        pageNumber,
        publisher,
        ISBN,
        paperType,
        paperLevel,
        certificateUrl
      )
    ),
  getPersonalDetails: () => {
    dispatch(getPersonalDetails());
  },
  getInternships: () => {
    dispatch(getInternships());
  },
  getAcademics: () => {
    dispatch(getAcademics());
  },
  getProjectDetails: () => {
    dispatch(getProjectDetails());
  },
  getOnlineCerifications: () => {
    dispatch(getOnlineCerifications());
  },
  getStudentBodyDetails: () => {
    dispatch(getStudentBodyDetails());
  },
  getStudentProjectCompetition: () => {
    dispatch(getStudentProjectCompetition());
  },
  getStudentPublication: () => {
    dispatch(getStudentPublication());
  },
  getExtraCurriculars: () => {
    dispatch(getExtraCurriculars());
  },
  getAttendance: () => {
    dispatch(getAttendance());
  },
  deleteInternships: (id) => {
    dispatch(deleteInternships(id));
  },
  deleteProjectDetails: (id) => {
    dispatch(deleteProjectDetails(id));
  },
  deleteOnlineCertifications: (id) => {
    dispatch(deleteOnlineCertifications(id));
  },
  deleteExtraCurriculars: (id) => {
    dispatch(deleteExtraCurriculars(id));
  },
  deleteAttendance: (id) => {
    dispatch(deleteAttendance(id));
  },
  deleteStudentBodyDetails: (id) => {
    dispatch(deleteStudentBodyDetails(id));
  },
  deleteStudentProjectCompetition: (id) => {
    dispatch(deleteStudentProjectCompetition(id));
  },
  deleteStudentPublication: (id) => {
    dispatch(deleteStudentPublication(id));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.getPersonalDetails();
    this.props.getInternships();
    this.props.getAcademics();
    this.props.getProjectDetails();
    this.props.getOnlineCerifications();
    this.props.getStudentBodyDetails();
    this.props.getStudentProjectCompetition();
    this.props.getStudentPublication();
    this.props.getExtraCurriculars();
    this.props.getAttendance();
  }

  render() {
    const HomePage = () => {
      return (
        <div>
          <Home
            personaldetail={this.props.personaldetails.allPersonalDetails}
            isPersonalDetailLoading={this.props.personaldetails.isLoading}
            isPersonalDetailError={this.props.personaldetails.error}
            academic={this.props.academics.academics}
            isAcademicLoading={this.props.academics.isLoading}
            isAcademicError={this.props.academics.error}
            internship={this.props.internships.internships}
            isInternshipLoading={this.props.internships.isLoading}
            isInternshipError={this.props.internships.error}
            projectdetail={this.props.projectDetails.projectDetails}
            isProjectDetailLoading={this.props.projectDetails.isLoading}
            isProjectDetailError={this.props.projectDetails.error}
            onlinecertification={
              this.props.onlineCertifications.onlineCertifications
            }
            isOnlineCertificationLoading={
              this.props.onlineCertifications.isLoading
            }
            isOnlineCertificationError={this.props.onlineCertifications.error}
            studentBodyDetail={this.props.studentBodyDetails.studentBodyDetails}
            isStudentBodyDetailLoading={this.props.studentBodyDetails.isLoading}
            isStudentBodyDetailError={this.props.studentBodyDetails.error}
            projectCompetition={
              this.props.studentProjectCompetition.studentProjectCompetition
            }
            isStudentProjectCompetitionLoading={
              this.props.studentProjectCompetition.isLoading
            }
            isStudentProjectCompetitionError={
              this.props.studentProjectCompetition.error
            }
            publication={this.props.studentPublication.studentPublication}
            isStudentPublicationLoading={
              this.props.studentPublication.isLoading
            }
            isStudentPublicationError={this.props.studentPublication.error}
            extraCurricular={this.props.extraCurriculars.extraCurriculars}
            isExtraCurricularsLoading={this.props.extraCurriculars.isLoading}
            isExtraCurricularsError={this.props.extraCurriculars.error}
            studentAttendance={this.props.attendance.attendance}
            isAttendanceLoading={this.props.attendance.isLoading}
            isAttendanceError={this.props.attendance.error}
            postPointers={this.props.postPointers}
          />
        </div>
      );
    };

    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/login"
              component={() => <Login postLogin={this.props.postLogin} />}
            />
            <Route
              exact
              path="/register"
              component={() => (
                <Register postRegister={this.props.postRegister} />
              )}
            />
            <Route
              exact
              path="/forgotpassword"
              component={() => (
                <ForgotPasswordComponent
                  forgotPassword={this.props.forgotPassword}
                />
              )}
            />
            <Route
              exact
              path="/resetPassword/:id"
              component={() => (
                <ResetPasswordComponent
                  resetPassword={this.props.resetPassword}
                />
              )}
            />
            <Route exact path="/home" component={HomePage} />
            <Route
              exact
              path="/personaldetails"
              component={() => (
                <PersonalDetails
                  postPersonalDetails={this.props.postPersonalDetails}
                  patchPersonalDetails={this.props.patchPersonalDetails}
                />
              )}
            />
            <Route
              exact
              path="/academics"
              component={() => (
                <Academics
                  postAcademics={this.props.postAcademics}
                  patchAcademics={this.props.patchAcademics}
                />
              )}
            />
            <Route
              exact
              path="/internships"
              component={() => (
                <Internship
                  postInternships={this.props.postInternships}
                  patchInternships={this.props.patchInternships}
                  deleteInternships={this.props.deleteInternships}
                />
              )}
            />
            <Route
              exact
              path="/projectdetails"
              component={() => (
                <ProjectDetails
                  postProjectDetails={this.props.postProjectDetails}
                  patchProjectDetails={this.props.patchProjectDetails}
                  deleteProjectDetails={this.props.deleteProjectDetails}
                />
              )}
            />
            <Route
              exact
              path="/onlinecertifications"
              component={() => (
                <OnlineCertification
                  postOnlineCertifications={this.props.postOnlineCertifications}
                  patchOnlineCertifications={
                    this.props.patchOnlineCertifications
                  }
                  deleteOnlineCertifications={
                    this.props.deleteOnlineCertifications
                  }
                />
              )}
            />
            <Route
              exact
              path="/co-curriculars"
              component={() => (
                <CoCurriculars
                  postStudentBodyDetails={this.props.postStudentBodyDetails}
                  postStudentProjectCompetition={
                    this.props.postStudentProjectCompetition
                  }
                  postStudentPublication={this.props.postStudentPublication}
                  patchStudentBodyDetails={this.props.patchStudentBodyDetails}
                  patchStudentProjectCompetition={
                    this.props.patchStudentProjectCompetition
                  }
                  patchStudentPublication={this.props.patchStudentPublication}
                  deleteStudentBodyDetails={this.props.deleteStudentBodyDetails}
                  deleteStudentProjectCompetition={
                    this.props.deleteStudentProjectCompetition
                  }
                  deleteStudentPublication={this.props.deleteStudentPublication}
                />
              )}
            />
            <Route
              exact
              path="/extra-curriculars"
              component={() => (
                <ExtraCurriculars
                  postExtraCurriculars={this.props.postExtraCurriculars}
                  patchExtraCurriculars={this.props.patchExtraCurriculars}
                  deleteExtraCurriculars={this.props.deleteExtraCurriculars}
                />
              )}
            />
            <Route
              exact
              path="/attendance"
              component={() => (
                <AttendanceComponent
                  postAttendance={this.props.postAttendance}
                  patchAttendance={this.props.patchAttendance}
                  deleteAttendance={this.props.deleteAttendance}
                />
              )}
            />
            <Route
              exact
              path="/settings"
              component={() => (
                <Settings changePassword={this.props.changePassword} />
              )}
            />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
