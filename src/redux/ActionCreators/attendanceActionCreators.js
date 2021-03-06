import axios from "axios";
import { actions } from "react-redux-form";
import * as ActionTypes from "../actionTypes";

let token = localStorage.getItem("token");

export const postAttendance = (
  semester,
  tAttendance,
  praticalAttendance
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/users/attendance",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        theoryAttendance: tAttendance,
        praticalAttendance: praticalAttendance,
      },
    });
    if (res.data.status === "success") {
      alert("Student Attendance posted");
      dispatch(actions.reset("userAttendance"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userAttendance"));
  }
};

export const getAttendance = () => async (dispatch) => {
  try {
    dispatch(attendanceLoading(true));
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/users/attendance",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      dispatch(addAttendance(res.data.data.attendance));
    }
  } catch (err) {
    console.log("error", err.response.data.message);
    dispatch(attendanceFailed(err.response.data.message));
  }
};

export const attendanceLoading = () => ({
  type: ActionTypes.ATTENDANCE_LOADING,
});

export const attendanceFailed = (errmessage) => ({
  type: ActionTypes.ATTENDANCE_FAILED,
  payload: errmessage,
});

export const addAttendance = (attendance) => ({
  type: ActionTypes.GET_ATTENDANCE,
  payload: attendance,
});

export const patchAttendance = (
  id,
  semester,
  tAttendance,
  praticalAttendance
) => async (dispatch) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:5000/api/v1/users/attendance`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        theoryAttendance: tAttendance,
        praticalAttendance: praticalAttendance,
      },
    });
    if (res.data.status === "success") {
      alert("Student Attendance updated");
      dispatch(actions.reset("userAttendance"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userAttendance"));
  }
};

export const deleteAttendance = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://127.0.0.1:5000/api/v1/users/attendance`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Extra-Curricular Deleted");
    dispatch(actions.reset("userAttendance"));
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userAttendance"));
  }
};
