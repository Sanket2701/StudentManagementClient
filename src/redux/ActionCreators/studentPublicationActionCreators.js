import axios from "axios";
import { actions } from "react-redux-form";
import * as ActionTypes from "../actionTypes";

let token = localStorage.getItem("token");

export const postStudentPublication = (
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
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/coCurriculars/studentPublication",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
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
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Student Publication posted");
      dispatch(actions.reset("userStudentPublication"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userStudentPublication"));
  }
};

export const getStudentPublication = () => async (dispatch) => {
  try {
    dispatch(studentPublicationLoading(true));
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/coCurriculars",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      dispatch(addStudentPublication(res.data.data.user.studentPublications));
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    dispatch(studentPublicationFailed(err.response.data.message));
  }
};

export const studentPublicationLoading = () => ({
  type: ActionTypes.STUDENTPUBLICATION_LOADING,
});

export const studentPublicationFailed = (errmessage) => ({
  type: ActionTypes.STUDENTPUBLICATION_FAILED,
  payload: errmessage,
});

export const addStudentPublication = (studentPublication) => ({
  type: ActionTypes.GET_STUDENTPUBLICATION,
  payload: studentPublication,
});

export const patchStudentPublication = (
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
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/coCurriculars/studentPublication/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
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
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Student Publication Updated");
      dispatch(actions.reset("userStudentPublication"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userStudentPublication"));
  }
};

export const deleteStudentPublication = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://127.0.0.1:5000/api/v1/coCurriculars/studentPublication/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Student Project Competition Deleted");
    dispatch(actions.reset("userStudentPublication"));
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userStudentPublication"));
  }
};
