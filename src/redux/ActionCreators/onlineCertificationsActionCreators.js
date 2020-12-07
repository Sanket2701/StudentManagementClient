import axios from "axios";
import { actions } from "react-redux-form";
import * as ActionTypes from "../actionTypes";

let token = localStorage.getItem("token");

export const postOnlineCertifications = (
  semester,
  platform,
  domain,
  title,
  from,
  to,
  certificateUrl
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/onlineCertification",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        sem: semester,
        platform: platform,
        domain: domain,
        title: title,
        from: from,
        to: to,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Online Certification posted");
      dispatch(actions.reset("userOnlineCertification"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userOnlineCertification"));
  }
};
export const getOnlineCerifications = () => async (dispatch) => {
  try {
    dispatch(onlineCertificationsLoading(true));
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/onlineCertification",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      dispatch(addOnlineCerifications(res.data.data.data.onlineCertifications));
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    dispatch(onlineCertificationsFailed(err.response.data.message));
  }
};

export const onlineCertificationsLoading = () => ({
  type: ActionTypes.ONLINECERTIFICATIONS_LOADING,
});

export const onlineCertificationsFailed = (errmessage) => ({
  type: ActionTypes.ONLINECERTIFICATIONS_FAILED,
  payload: errmessage,
});

export const addOnlineCerifications = (onlineCertifications) => ({
  type: ActionTypes.GET_ONLINECERTIFICATIONS,
  payload: onlineCertifications,
});

export const patchOnlineCertifications = (
  id,
  semester,
  platform,
  domain,
  title,
  from,
  to,
  certificateUrl
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/onlineCertification/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        sem: semester,
        platform: platform,
        domain: domain,
        title: title,
        from: from,
        to: to,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Online Certification updated");
      dispatch(actions.reset("userOnlineCertification"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userOnlineCertification"));
  }
};

export const deleteOnlineCertifications = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://127.0.0.1:5000/api/v1/onlineCertification/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Online Certification Deleted");
    dispatch(actions.reset("userOnlineCertification"));
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userOnlineCertification"));
  }
};
