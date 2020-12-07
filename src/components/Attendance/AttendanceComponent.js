import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./AttendanceComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;

class AttendanceComponent extends Component {
  constructor(props) {
    super(props);
    this.handleAttendance = this.handleAttendance.bind(this);
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleAttendance(values) {
    this.props.fromDashBoard
      ? this.props.patchAttendance(
          this.state._id,
          values.semester,
          values.theoryAttendance,
          values.praticalAttendance
        )
      : this.props.postAttendance(
          values.semester,
          values.theoryAttendance,
          values.praticalAttendance
        );
  }
  handleChange(event) {
    let key = event.target.name;
    this.setState({
      ...this.state,
      [key]: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div id="attendance-title">
          <h1>Attendance</h1>
        </div>
        <div className="single-attendance-form">
          <Form
            model="userAttendance"
            onSubmit={(values) => this.handleAttendance(values)}
          >
            <Row>
              <Label
                htmlFor="semester"
                lg={3}
                className="attendance-form-label"
              >
                Semester :*
              </Label>
              <Col className="attendance-form-fields">
                <Control.select
                  model=".semester"
                  id="attendance_semester"
                  name="semester"
                  className="form-control"
                  placeholder=""
                  value={this.state.semester}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Control.select>
                <Errors
                  className="text-danger error-message"
                  model=".semester"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="tAttendance"
                lg={3}
                className="attendance-form-label"
              >
                Theory Attendance :*
              </Label>
              <Col className="attendance-form-fields">
                <Control.text
                  model=".theoryAttendance"
                  id="tAttendance"
                  name="theoryAttendance"
                  className="form-control"
                  placeholder=""
                  value={this.state.theoryAttendance}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".theoryAttendance"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="pAttendance"
                lg={3}
                className="attendance-form-label"
              >
                Practical Attendance :*
              </Label>
              <Col className="attendance-form-fields">
                <Control.text
                  model=".praticalAttendance"
                  id="pAttendance"
                  name="praticalAttendance"
                  className="form-control"
                  placeholder=""
                  value={this.state.praticalAttendance}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".praticalAttendance"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row className="submit-button-attendance">
              {this.state.fromDashBoard ? (
                <div></div>
              ) : (
                <Button type="submit" id="attendance-save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromDashBoard ? (
              <Row className="submit-button-attendance">
                <Button
                  className="mr10"
                  id="attendance-delete-button"
                  onClick={() => {
                    this.props.deleteAttendance(this.state._id);
                  }}
                >
                  Delete
                </Button>
                <Button id="update-button" type="submit">
                  Update <i className="fa fa-arrow-right"></i>
                </Button>
              </Row>
            ) : (
              <div></div>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default AttendanceComponent;
