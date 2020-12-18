import React, { Component } from "react";
import "./Co-curricularsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class StudentBodyDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.handleStudentBodyDetails = this.handleStudentBodyDetails.bind(this);
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleStudentBodyDetails(values) {
    this.props.fromStudentBody
      ? this.props.patchStudentBodyDetails(
          this.state._id,
          values.studentBodyYear,
          values.name,
          values.post
        )
      : this.props.postStudentBodyDetails(
          values.studentBodyYear,
          values.name,
          values.post
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
      <div className="student-body-form">
        <div className="student-body-heading">
          <h3>Student Body Details</h3>
        </div>
        <div className="single-student-body-form">
          <Form
            model="userStudentBodyDetails"
            onSubmit={(values) => this.handleStudentBodyDetails(values)}
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
                  model=".studentBodyYear"
                  id="studentBodyYear"
                  name="studentBodyYear"
                  className="form-control"
                  placeholder="Academic Year"
                  value={this.state.studentBodyYear}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".studentBodyYear"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="name"
                lg={3}
                className="co-curriculars-form-label"
              >
                Committee Name :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".name"
                  id="student-body-name"
                  name="name"
                  className="form-control"
                  placeholder=""
                  value={this.state.name}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    validName,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "*Required ",
                    validName: "*Must be a Valid Name",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="post"
                lg={3}
                className="co-curriculars-form-label"
              >
                Post :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".post"
                  id="student-body-post"
                  name="post"
                  className="form-control"
                  placeholder=""
                  value={this.state.post}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    validName,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".post"
                  show="touched"
                  messages={{
                    required: "*Required ",
                    validName: "*Must be a Valid Name",
                  }}
                />
              </Col>
            </Row>
            <Row className="submit-button-student-body">
              {this.state.fromStudentBody ? (
                <div></div>
              ) : (
                <Button type="submit" id="student-body-save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromStudentBody ? (
              <Row className="submit-button-student-body">
                <Button
                  className="mr10"
                  id="student-body-delete-button"
                  onClick={() => {
                    this.props.deleteStudentBodyDetails(this.state._id);
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

export default StudentBodyDetailsComponent;
