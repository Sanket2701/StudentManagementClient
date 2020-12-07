import axios from "axios";
import { actions } from "react-redux-form";
import * as ActionTypes from "../actionTypes";

let token = localStorage.getItem("token");

export const postExtraCurriculars = (
  semester,
  activity,
  levelActivity,
  position,
  certificateUrl
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/extraCurriculars",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        activity: activity,
        levelActivity: levelActivity,
        position: position,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Student Extra-Curriculars posted");
      dispatch(actions.reset("userExtraCurriculars"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userExtraCurriculars"));
  }
};

export const getExtraCurriculars = () => async (dispatch) => {
  try {
    dispatch(extraCurricularsLoading(true));
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/extraCurriculars",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      dispatch(addExtraCurriculars(res.data.data.data.extracurriculars));
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    dispatch(extraCurricularsFailed(err.response.data.message));
  }
};

export const extraCurricularsLoading = () => ({
  type: ActionTypes.EXTRACURRICULARS_LOADING,
});

export const extraCurricularsFailed = (errmessage) => ({
  type: ActionTypes.EXTRACURRICULARS_FAILED,
  payload: errmessage,
});

export const addExtraCurriculars = (extraCurriculars) => ({
  type: ActionTypes.GET_EXTRACURRICULARS,
  payload: extraCurriculars,
});

export const patchExtraCurriculars = (
  id,
  semester,
  activity,
  levelActivity,
  position,
  certificateUrl
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/extraCurriculars/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        activity: activity,
        levelActivity: levelActivity,
        position: position,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Student Extra-Curriculars updated");
      dispatch(actions.reset("userExtraCurriculars"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userExtraCurriculars"));
  }
};

export const deleteExtraCurriculars = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://127.0.0.1:5000/api/v1/extraCurriculars/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Extra-Curricular Deleted");
    dispatch(actions.reset("userExtraCurriculars"));
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userExtraCurriculars"));
  }
};
