import axios from "axios";
import { actions } from "react-redux-form";

let token = localStorage.getItem("token");

export const postPointers = (semester, gpa, certificateUrl) => async (
  dispatch
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/academics/pointer",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        semester: semester,
        gpa: gpa,
        certificateUrl: certificateUrl,
      },
    });
    if (res.data.status === "success") {
      alert("Success");
      dispatch(actions.reset("userPointer"));
    }
  } catch (err) {
    alert(err.response.data.message);
    dispatch(actions.reset("userPointer"));
  }
};
