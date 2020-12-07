import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./SettingsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleChangePassword(values) {
    this.props.changePassword(
      values.passwordCurrent,
      values.password,
      values.passwordConfirm
    );
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div id="setting-title">
          <h1>Settings</h1>
        </div>
        <div className="single-setting-form">
          <Form
            model="userChangePassword"
            onSubmit={(values) => this.handleChangePassword(values)}
          >
            <Row className="form-group">
              <Label
                htmlFor="passwordCurrent"
                lg={3}
                className="setting-form-label"
              >
                Old Password :*
              </Label>
              <Col className="setting-form-fields">
                <Control.text
                  model=".passwordCurrent"
                  type="password"
                  id="passwordCurrent"
                  name="passwordCurrent"
                  className="form-control"
                  placeholder="Old Password"
                  validators={{
                    required,
                    minLength: minLength(8),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".passwordCurrent"
                  show="touched"
                  messages={{
                    required: "*Required",
                    minLength: "*Must be Greater than 8 characters",
                    maxLength: "*Must be 15 charachters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="passsword" lg={3} className="setting-form-label">
                New Password :*
              </Label>
              <Col className="setting-form-fields">
                <Control.text
                  model=".password"
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
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
                    maxLength: "*Must be 15 charachters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label
                htmlFor="passwordConfirm"
                lg={3}
                className="setting-form-label"
              >
                Confirm Password :*
              </Label>
              <Col className="setting-form-fields">
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
                    maxLength: "*Must be 15 charachters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="submit-button-setting">
              <Button type="submit" id="setting-save-button">
                Save <i class="fa fa-arrow-right"></i>
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Settings;
