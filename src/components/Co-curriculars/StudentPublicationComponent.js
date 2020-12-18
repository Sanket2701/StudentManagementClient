import React, { Component } from "react";
import "./Co-curricularsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;

class StudentPublicationComponent extends Component {
  constructor(props) {
    super(props);
    this.handleStudentPublication = this.handleStudentPublication.bind(this);
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleStudentPublication(values) {
    this.props.fromStudentPublication
      ? this.props.patchStudentPublication(
          this.state._id,
          values.title,
          values.studentPublicationYear,
          values.author,
          values.dateOfIssue,
          values.volume,
          values.pageNumber,
          values.publisher,
          values.isbn,
          values.paperType,
          values.paperLevel,
          values.studentPublicationCertificateUrl
        )
      : this.props.postStudentPublication(
          values.title,
          values.studentPublicationYear,
          values.author,
          values.dateOfIssue,
          values.volume,
          values.pageNumber,
          values.publisher,
          values.isbn,
          values.paperType,
          values.paperLevel,
          values.studentPublicationCertificateUrl
        );
  }
  handleChange(event) {
    let key = event.target.name;
    this.setState({
      ...this.state,
      [key]: event.target.value,
    });
  }
  componentDidMount() {
    console.log(window.history.state);
  }
  render() {
    return (
      <div className="student-publication-form">
        <div className="student-publication-heading">
          <h3>Student Publication Details</h3>
        </div>
        <div className="single-student-publication-form">
          <Form
            model="userStudentPublication"
            onSubmit={(values) => this.handleStudentPublication(values)}
          >
            <Row>
              <Label
                htmlFor="title"
                lg={3}
                className="co-curriculars-form-label"
              >
                Title :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".title"
                  id="publication-title"
                  name="title"
                  className="form-control"
                  placeholder=""
                  value={this.state.title}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".title"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="studentPublicationYear"
                lg={3}
                className="co-curriculars-form-label"
              >
                Year :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".studentPublicationYear"
                  id="publication-year"
                  name="studentPublicationYear"
                  className="form-control"
                  placeholder="Academic Year"
                  value={this.state.studentPublicationYear}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".studentPublicationYear"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="author"
                lg={3}
                className="co-curriculars-form-label"
              >
                Author :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".author"
                  id="publication-author"
                  name="author"
                  className="form-control"
                  placeholder=""
                  value={this.state.author}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="dateOfIssue"
                lg={3}
                className="co-curriculars-form-label"
              >
                Date of Issue :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".dateOfIssue"
                  type="date"
                  id="student-publication-date"
                  name="dateOfIssue"
                  className="form-control"
                  placeholder=""
                  value={this.state.dateOfIssue}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".dateOfIssue"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="volume"
                lg={3}
                className="co-curriculars-form-label"
              >
                Volume :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".volume"
                  id="student-publication-volume"
                  name="volume"
                  className="form-control"
                  placeholder=""
                  value={this.state.volume}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".volume"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="pageNumber"
                lg={3}
                className="co-curriculars-form-label"
              >
                Page Number :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".pageNumber"
                  id="pageNumber"
                  name="pageNumber"
                  className="form-control"
                  placeholder=""
                  value={this.state.pageNumber}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".pageNumber"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="publisher"
                lg={3}
                className="co-curriculars-form-label"
              >
                Publisher :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".publisher"
                  id="publication-publisher"
                  name="publisher"
                  className="form-control"
                  placeholder=""
                  value={this.state.publisher}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".publisher"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="isbn"
                lg={3}
                className="co-curriculars-form-label"
              >
                ISBN/E-ISSN :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".isbn"
                  id="publication-isbn"
                  name="ISBN"
                  className="form-control"
                  placeholder=""
                  value={this.state.ISBN}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".isbn"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="paperType"
                lg={3}
                className="co-curriculars-form-label"
              >
                Paper Type :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.select
                  model=".paperType"
                  id="publication-paperType"
                  name="paperType"
                  className="form-control"
                  placeholder=""
                  value={this.state.paperType}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                >
                  <option>Select</option>
                  <option>Journal</option>
                  <option>Conference</option>
                </Control.select>
                <Errors
                  className="text-danger error-message"
                  model=".paperType"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="paperLevel"
                lg={3}
                className="co-curriculars-form-label"
              >
                Paper Level :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.select
                  model=".paperLevel"
                  id="publication-paperLevel"
                  name="paperLevel"
                  className="form-control"
                  placeholder=""
                  value={this.state.paperLevel}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                >
                  <option>Select</option>
                  <option>National</option>
                  <option>International</option>
                </Control.select>
                <Errors
                  className="text-danger error-message"
                  model=".paperLevel"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="studentPublicationCertificateUrl"
                lg={3}
                className="co-curriculars-form-label"
              >
                Certificate Url :*
              </Label>
              <Col className="co-curriculars-form-fields">
                <Control.text
                  model=".studentPublicationCertificateUrl"
                  type="url"
                  id="publication-certificateUrl"
                  name="studentPublicationCertificateUrl"
                  className="form-control"
                  placeholder=""
                  value={this.state.studentPublicationCertificateUrl}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".studentPublicationCertificateUrl"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row className="submit-button-student-body">
              {this.state.fromStudentPublication ? (
                <div></div>
              ) : (
                <Button type="submit" id="student-body-save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromStudentPublication ? (
              <Row className="submit-button-student-body">
                <Button
                  className="mr10"
                  id="student-body-delete-button"
                  onClick={() => {
                    this.props.deleteStudentPublication(this.state._id);
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

export default StudentPublicationComponent;
