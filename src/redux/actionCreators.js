import axios from "axios";
import history from "./history";
import { actions } from "react-redux-form";

export const postRegister = (
  name,
  email,
  collegeId,
  password,
  passwordConfirm
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/users/signUp",
      data: {
        name: name,
        email: email,
        collegeId: collegeId,
        password: password,
        passwordConfirm: passwordConfirm,
      },
    });
    if (res.data.status === "success") {
      console.log("Success", "Registered Successfully");
      alert("Success\nRegistered Successfully");
      history.push("/login");
    }
    console.log(res);
  } catch (err) {
    console.log("error", err.response.data.message);
    alert("Error: ", err.response.data.message);
  }
};

export const postLogin = (email, password) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/users/login",
      data: {
        email: email,
        password: password,
      },
    });
    if (res.data.status === "success") {
      console.log("Success", "Logged in successfully");
      alert("Success\nLogged in successfully");
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("token"));
      localStorage.setItem("username", res.data.data.user.name);
      history.push("/home");
    }
  } catch (err) {
    if (err.response && err.response.data) {
      console.log("error", err.response.data.message);
      alert(err.response.data.message);
    }
  }
};
export const changePassword = (
  passwordCurrent,
  password,
  passwordConfirm
) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    const res = await axios({
      method: "PATCH",
      url: "http://127.0.0.1:5000/api/v1/users/updatePassword",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm,
      },
    });
    if (res.data.status === "success") {
      alert("Password Changed successfully");
      dispatch(actions.reset("userPointer"));
      history.push("/login");
    }
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data.message);
      dispatch(actions.reset("userPointer"));
    }
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/users/forgotPassword",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        email: email,
      },
    });
    if (res.data.status === "success") {
      alert("Email Sent successfully");
    }
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data.message);
    }
  }
};

export const resetPassword = (resetToken, password, passwordConfirm) => async (
  dispatch
) => {
  try {
    let token = localStorage.getItem("token");
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/users/resetPassword/${resetToken}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        password: password,
        passwordConfirm: passwordConfirm,
      },
    });
    if (res.data.status === "success") {
      alert("Password Changed successfully");
      history.push("/login");
    }
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data.message);
    }
  }
};
