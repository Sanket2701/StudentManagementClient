import axios from "axios";
import { actions } from "react-redux-form";
import * as ActionTypes from "../actionTypes";

let token = localStorage.getItem("token");

export const postProjectDetails = (
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
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/project",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        title: title,
        from: from,
        to: to,
        role: role,
        mentor: mentor,
        funded: funded,
        investor: investor,
        skillsDeveloped: skillsDeveloped,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Project Details posted");
      dispatch(actions.reset("userProjectDetails"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userProjectDetails"));
  }
};
export const getProjectDetails = () => async (dispatch) => {
  try {
    dispatch(projectDetailsLoading(true));
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/project",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      dispatch(addProjectDetails(res.data.data.data.projects));
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    dispatch(projectDetailsFailed(err.response.data.message));
  }
};

export const projectDetailsLoading = () => ({
  type: ActionTypes.PROJECTDETAILS_LOADING,
});

export const projectDetailsFailed = (errmessage) => ({
  type: ActionTypes.PROJECTDETAILS_FAILED,
  payload: errmessage,
});

export const addProjectDetails = (project) => ({
  type: ActionTypes.GET_PROJECTDETAILS,
  payload: project,
});

export const patchProjectDetails = (
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
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/project/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        title: title,
        from: from,
        to: to,
        role: role,
        mentor: mentor,
        funded: funded,
        investor: investor,
        skillsDeveloped: skillsDeveloped,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Project Details Updated");
      dispatch(actions.reset("userProjectDetails"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userProjectDetails"));
  }
};

export const deleteProjectDetails = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://127.0.0.1:5000/api/v1/project/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Project Details Deleted");
    dispatch(actions.reset("userProjectDetails"));
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userProjectDetails"));
  }
};
