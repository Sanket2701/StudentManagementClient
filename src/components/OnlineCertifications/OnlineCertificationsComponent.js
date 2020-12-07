import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./OnlineCertificationsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;

class OnlineCertification extends Component {
  constructor(props) {
    super(props);
    this.handleOnlineCertification = this.handleOnlineCertification.bind(this);
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleOnlineCertification(values) {
    console.log(values);
    this.state.fromDashBoard
      ? this.props.patchOnlineCertifications(
          this.state._id,
          values.sem,
          values.platform,
          values.domain,
          values.title,
          values.from,
          values.to,
          values.certificateUrl
        )
      : this.props.postOnlineCertifications(
          values.sem,
          values.platform,
          values.domain,
          values.title,
          values.from,
          values.to,
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
  componentDidMount() {
    console.log(window.history.state);
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div id="online-certification-title">
          <h1>Online Certifications</h1>
        </div>
        <div className="single-certification-form">
          <Form
            model="userOnlineCertification"
            onSubmit={(values) => this.handleOnlineCertification(values)}
          >
            <Row>
              <Label
                htmlFor="semester"
                lg={3}
                className="online-certification-form-label"
              >
                Done During Semester :*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.select
                  model=".sem"
                  id="online-certification-done-during-semester"
                  name="sem"
                  className="form-control"
                  placeholder=""
                  value={this.state.sem}
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
                  model=".sem"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="platform"
                lg={3}
                className="online-certification-form-label"
              >
                Platform :*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.text
                  model=".platform"
                  id="online-certification-platform"
                  name="platform"
                  className="form-control"
                  placeholder="Udemy, Coursera, Nptel, etc."
                  value={this.state.platform}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".platform"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="domain"
                lg={3}
                className="online-certification-form-label"
              >
                Domain :*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.text
                  model=".domain"
                  id="online-certification-domain"
                  name="domain"
                  className="form-control"
                  placeholder=""
                  value={this.state.domain}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".domain"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="title"
                lg={3}
                className="online-certification-form-label"
              >
                Title of Course :*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.text
                  model=".title"
                  id="online-certification-title-course"
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
                htmlFor="online-certification-details"
                lg={3}
                className="online-certification-form-label"
              >
                Duration :*
              </Label>
              <Label
                htmlFor="from"
                lg={1}
                className="online-certification-form-label"
              >
                From:*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.text
                  model=".from"
                  type="date"
                  id="online-certification-from"
                  name="from"
                  className="form-control"
                  placeholder=""
                  value={`${this.state.from}`.substring(0, 10)}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".from"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
              <Label
                htmlFor="to"
                lg={1}
                className="online-certification-form-label"
              >
                To:*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.text
                  model=".to"
                  type="date"
                  id="online-certification-to"
                  name="to"
                  className="form-control"
                  placeholder=""
                  value={`${this.state.to}`.substring(0, 10)}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".to"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="certificateUrl"
                lg={3}
                className="online-certification-form-label"
              >
                Certificate Url :*
              </Label>
              <Col className="online-certification-form-fields">
                <Control.text
                  model=".certificateUrl"
                  type="url"
                  id="online-certification-certificateUrl"
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
            <Row className="submit-button-online-certification">
              {this.state.fromDashBoard ? (
                <div></div>
              ) : (
                <Button type="submit" id="online-certification-save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromDashBoard ? (
              <Row className="submit-button-online-certification">
                <Button
                  className="mr10"
                  id="online-certification-delete-button"
                  onClick={() => {
                    this.props.deleteOnlineCertifications(this.state._id);
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

export default OnlineCertification;
