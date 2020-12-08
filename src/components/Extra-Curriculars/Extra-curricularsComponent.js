import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./Extra-curricularsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;

class ExtraCurriculars extends Component {
  constructor(props) {
    super(props);
    this.handleExtraCurriculars = this.handleExtraCurriculars.bind(this);
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleExtraCurriculars(values) {
    this.props.fromDashBoard
      ? this.props.patchtExtraCurriculars(
          this.state._id,
          values.semester,
          values.activity,
          values.levelActivity,
          values.position,
          values.certificateUrl
        )
      : this.props.postExtraCurriculars(
          values.semester,
          values.activity,
          values.levelActivity,
          values.position,
          values.certificateUrl
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
        <div id="extracurricular-title">
          <h1>Extra-Curriculars</h1>
        </div>
        <div className="single-extracurricular-form">
          <Form
            model="userExtraCurriculars"
            onSubmit={(values) => this.handleExtraCurriculars(values)}
          >
            <Row>
              <Label
                htmlFor="semester"
                lg={3}
                className="extracurricular-form-label"
              >
                Done During Semester :*
              </Label>
              <Col className="extracurricular-form-fields">
                <Control.select
                  model=".semester"
                  id="extra-curricular-semester"
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
                htmlFor="activity"
                lg={3}
                className="extracurricular-form-label"
              >
                Activity :*
              </Label>
              <Col className="extracurricular-form-fields">
                <Control.text
                  model=".activity"
                  id="extra-curricular-activity"
                  name="activity"
                  className="form-control"
                  placeholder=""
                  value={this.state.activity}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".activity"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="levelActivity"
                lg={3}
                className="extracurricular-form-label"
              >
                Level of Activity :*
              </Label>
              <Col className="extracurricular-form-fields">
                <Control.text
                  model=".levelActivity"
                  id="extra-curricular-levelActivity"
                  name="levelActivity"
                  className="form-control"
                  placeholder=""
                  value={this.state.levelActivity}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".levelActivity"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="position"
                lg={3}
                className="extracurricular-form-label"
              >
                Position (if acquired) :
              </Label>
              <Col className="extracurricular-form-fields">
                <Control.text
                  model=".position"
                  id="extra-curricular-position"
                  name="position"
                  className="form-control"
                  placeholder=""
                  value={this.state.position}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="certificateUrl"
                lg={3}
                className="extracurricular-form-label"
              >
                Certificate Url :*
              </Label>
              <Col className="extracurricular-form-fields">
                <Control.text
                  model=".certificateUrl"
                  type="url"
                  id="extra-curricular-certificateUrl"
                  name="certificateUrl"
                  className="form-control"
                  placeholder=""
                  value={this.state.certificateUrl}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".certificateUrl"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row className="submit-button-extracurricular">
              {this.state.fromDashBoard ? (
                <div></div>
              ) : (
                <Button type="submit" id="extracurricular-save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromDashBoard ? (
              <Row className="submit-button-extracurricular">
                <Button
                  className="mr10"
                  id="extracurricular-delete-button"
                  onClick={() => {
                    this.props.deleteExtraCurriculars(this.state._id);
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

export default ExtraCurriculars;
