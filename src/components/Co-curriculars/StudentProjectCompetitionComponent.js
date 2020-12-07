import React, { Component } from "react";
import "./Co-curricularsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;

export class StudentProjectCompetitionComponent extends Component {
  constructor(props) {
    super(props);
    this.handleStudentProjectCompetition = this.handleStudentProjectCompetition.bind(
      this
    );
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleStudentProjectCompetition(values) {
    this.state.fromProjectCompetition
      ? this.props.patchStudentProjectCompetition(
          this.state._id,
          values.year,
          values.competitionName,
          values.projectTitle,
          values.role,
          values.position,
          values.certificateUrl
        )
      : this.props.postStudentProjectCompetition(
          values.year,
          values.competitionName,
          values.projectTitle,
          values.role,
          values.position,
          values.certificateUrl
        );
  }
  componentDidMount() {
    console.log(window.history.state);
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
      <div className="project-competition-form">
        <div className="project-competition-heading">
          <h3>Project Competition Details</h3>
        </div>
        <div className="single-project-competition-form">
          <Form
            model="userStudentProjectCompetition"
            onSubmit={(values) => this.handleStudentProjectCompetition(values)}
          >
            <Row>
              <Label
                htmlFor="year"
                lg={3}
                className="co-curriculars-form-label"
              >
                Year :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".year"
                  id="project-competition-year"
                  name="Competitionyear"
                  className="form-control"
                  placeholder="Academic Year"
                  value={this.state.year}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".year"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="competitionName"
                lg={3}
                className="co-curriculars-form-label"
              >
                Competition Name :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".competitionName"
                  id="project-competition-competitionName"
                  name="competitionName"
                  className="form-control"
                  placeholder=""
                  value={this.state.competitionName}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".competitionName"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="projectTitle"
                lg={3}
                className="co-curriculars-form-label"
              >
                Project Title :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".projectTitle"
                  id="project-competition-projectTitle"
                  name="projectTitle"
                  className="form-control"
                  placeholder=""
                  value={this.state.projectTitle}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".projectTitle"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="role"
                lg={3}
                className="co-curriculars-form-label"
              >
                Role :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".role"
                  id="project-competition-role"
                  name="role"
                  className="form-control"
                  placeholder=""
                  value={this.state.role}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".role"
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
                className="co-curriculars-form-label"
              >
                Position (if acquired) :
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".position"
                  id="project-competition-position"
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
                className="co-curriculars-form-label"
              >
                Certificate Url :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".certificateUrl"
                  type="url"
                  id="project-competition-certificateUrl"
                  name="certificateUrl"
                  className="form-control"
                  placeholder=""
                  value={
                    this.state.fromProjectCompetition
                      ? this.state.certificateUrl
                      : ""
                  }
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
            <Row className="submit-button-student-body">
              {this.state.fromProjectCompetition ? (
                <div></div>
              ) : (
                <Button type="submit" id="student-body-save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromProjectCompetition ? (
              <Row className="submit-button-student-body">
                <Button
                  className="mr10"
                  id="student-body-delete-button"
                  onClick={() => {
                    this.props.deleteStudentProjectCompetition(this.state._id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  id="update-button"
                  onClick={(values) => {
                    this.props.patchStudentProjectCompetition(
                      this.state._id,
                      values.year,
                      values.competitionName,
                      values.projectTitle,
                      values.role,
                      values.position,
                      values.certificateUrl
                    );
                  }}
                >
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

export default StudentProjectCompetitionComponent;
