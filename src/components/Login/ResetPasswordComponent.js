import React, { Component } from "react";
import "./LoginComponent.css";
import { Row, Col, Button } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class ResetPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.handleResetPassword = this.handleResetPassword.bind(this);
  }

  handleResetPassword(values) {
    let temp = window.location.href.split("/");
    let resetToken = temp[temp.length - 1];
    this.props.resetPassword(
      resetToken,
      values.password,
      values.passwordConfirm
    );
    console.log(values);
  }
  componentDidMount() {
    console.log(window.location.href);
  }
  render() {
    return (
      <div>
        <div id="login-image-container">
          <img
            width="100%"
            src="\images\KJSIEIT_Logo.jpg"
            alt="Logo"
            id="Logo"
          />
        </div>
        <div className="container" id="login-main-container">
          <div className="" id="login-left-container"></div>
          <div id="login-info-container">
            <div className="" id="login-middle-container"></div>
            <div className="" id="login-right-container"></div>
            <div id="login-text">Reset Password</div>
            <div id="form">
              <LocalForm
                onSubmit={(values) => this.handleResetPassword(values)}
              >
                <Row className="form-group" id="password-row">
                  <Col>
                    <Control.text
                      model=".password"
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="New Password"
                      validators={{
                        required,
                        minLength: minLength(8),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".password"
                      show="touched"
                      messages={{
                        required: "*Required",
                        minLength: "*Must be Greater than 8 characters",
                        maxLength: "*Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group" id="password-row">
                  <Col>
                    <Control.text
                      model=".passwordConfirm"
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      className="form-control"
                      placeholder="Confirm Password"
                      validators={{
                        required,
                        minLength: minLength(8),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".passwordConfirm"
                      show="touched"
                      messages={{
                        required: "*Required",
                        minLength: "*Must be Greater than 8 characters",
                        maxLength: "*Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Button type="submit" id="login-button">
                    Submit
                  </Button>
                </Row>
              </LocalForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPasswordComponent;
