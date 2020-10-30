import * as actionTypes from "./actionTypes";
import axios from "./../../api/axios";
import { reset, SubmissionError } from "redux-form";

export const loggedIn = (email, token, role, status) => {
  return {
    type: actionTypes.LOGIN,
    email: email,
    token: token,
    role: role,
    status: status,
  };
};
export const resetted = (email, token, role, status) => {
  return {
    type: actionTypes.RESET_PASSWORD,
    email: email,
    token: token,
    role: role,
    status: status,
  };
};

export const login = (data, link, form) => {
  return (dispatch) => {
    return axios
      .post(`${link}/login`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("expire", new Date(res.data.expDate));
        localStorage.setItem("email", res.data.email);
        dispatch(
          loggedIn(res.data.email, res.data.token, res.data.role, res.status)
        );
        dispatch(reset(form));
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        throw new SubmissionError({
          _error: err.response.data.message,
        });
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: actionTypes.LOGOUT,
  };
};

export const resetPassword = (data, token, link, form) => {
  console.log(data);
  return (dispatch) => {
    return axios
      .patch(`/${link}/password`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("expire", new Date(res.data.expDate));
        localStorage.setItem("email", res.data.email);
        dispatch(
          resetted(res.data.email, res.data.token, res.data.role, res.status)
        );
        dispatch(reset(form));
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        throw new SubmissionError({
          _error: err.response.data.message,
        });
      });
  };
};
