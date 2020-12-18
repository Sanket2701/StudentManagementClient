import axios from "axios";
import { actions } from "react-redux-form";
import * as ActionTypes from "../actionTypes";

let token = localStorage.getItem("token");

export const postStudentProjectCompetition = (
  studentProjectYear,
  competitionName,
  projectTitle,
  role,
  position,
  studentProjectCertificateUrl
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/coCurriculars/studentProject",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        studentProjectYear: studentProjectYear,
        competitionName: competitionName,
        projectTitle: projectTitle,
        role: role,
        position: position,
        studentProjectCertificateUrl: studentProjectCertificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Student Project Competition posted");
      dispatch(actions.reset("userStudentProjectCompetition"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userStudentProjectCompetition"));
  }
};
export const getStudentProjectCompetition = () => async (dispatch) => {
  try {
    dispatch(studentProjectCompetitionLoading(true));
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/coCurriculars",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      dispatch(
        addStudentProjectCompetition(res.data.data.user.studentProjects)
      );
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    dispatch(studentProjectCompetitionFailed(err.response.data.message));
  }
};

export const studentProjectCompetitionLoading = () => ({
  type: ActionTypes.STUDENTPROJECTCOMPETITION_LOADING,
});

export const studentProjectCompetitionFailed = (errmessage) => ({
  type: ActionTypes.STUDENTPROJECTCOMPETITION_FAILED,
  payload: errmessage,
});

export const addStudentProjectCompetition = (studentProjectCompetition) => ({
  type: ActionTypes.GET_STUDENTPROJECTCOMPETITION,
  payload: studentProjectCompetition,
});

export const patchStudentProjectCompetition = (
  id,
  studentProjectYear,
  competitionName,
  projectTitle,
  role,
  position,
  studentProjectCertificateUrl
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/coCurriculars/studentProject/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        studentProjectYear: studentProjectYear,
        competitionName: competitionName,
        projectTitle: projectTitle,
        role: role,
        position: position,
        studentProjectCertificateUrl: studentProjectCertificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Student Project Competition Updated");
      dispatch(actions.reset("userStudentProjectCompetition"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userStudentProjectCompetition"));
  }
};

export const deleteStudentProjectCompetition = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://127.0.0.1:5000/api/v1/coCurriculars/studentProject/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Student Project Competition Deleted");
    dispatch(actions.reset("userStudentProjectCompetition"));
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userStudentProjectCompetition"));
  }
};
