import React, { Component } from "react";
import "./LoginComponent.css";
import { Row, Col, Button } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);

class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }

  handleForgotPassword(values) {
    this.props.forgotPassword(values.email);
  }

  render() {
    return (
      <div>
        <div id="login-image-container">
          <img
            width="100%"
            src="images\KJSIEIT_Logo.jpg"
            alt="Logo"
            id="Logo"
          />
        </div>
        <div className="container" id="login-main-container">
          <div className="" id="login-left-container"></div>
          <div id="login-info-container">
            <div className="" id="login-middle-container"></div>
            <div className="" id="login-right-container"></div>
            <div id="login-text">Forgot Password</div>
            <div id="form">
              <LocalForm
                onSubmit={(values) => this.handleForgotPassword(values)}
              >
                <Row className="form-group">
                  <Col>
                    <Control.text
                      model=".email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Id"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(50),
                        validEmail,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "*Required ",
                        minLength: "*Must be Greater than 3 charachters ",
                        maxLength: "*Must be 50 charachters or less ",
                        validEmail: "*Must be a valid Email ",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Button type="submit" id="login-button">
                    Send Email
                  </Button>
                  <Link to="./login" id="forgot-link">
                    Login?
                  </Link>
                </Row>
              </LocalForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordComponent;
