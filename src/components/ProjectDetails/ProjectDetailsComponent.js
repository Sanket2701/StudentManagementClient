import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./ProjectDetailsComponent.css";
import { Button, Row, Col, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.handleProjectDetails = this.handleProjectDetails.bind(this);
    this.state = {
      ...window.history.state.state,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleProjectDetails(values) {
    this.state.fromDashBoard
      ? this.props.patchProjectDetails(
          this.state._id,
          values.semester,
          values.title,
          values.from,
          values.to,
          values.role,
          values.mentor,
          values.funded,
          values.investor,
          values.skillsDeveloped,
          values.certificateUrl
        )
      : this.props.postProjectDetails(
          values.semester,
          values.title,
          values.from,
          values.to,
          values.role,
          values.mentor,
          values.funded,
          values.investor,
          values.skillsDeveloped,
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
        <div id="project-details-title">
          <h1>Project Details</h1>
        </div>
        <div className="single-project-form">
          <Form
            model="userProjectDetails"
            onSubmit={(values) => this.handleProjectDetails(values)}
          >
            <Row>
              <Label
                htmlFor="semester"
                lg={3}
                className="project-details-form-label"
              >
                Done During Semester :*
              </Label>
              <Col className="project-details-form-fields">
                <Control.select
                  model=".semester"
                  id="project-details-done-during-semester"
                  name="semester"
                  className="form-control"
                  value={this.state.semester}
                  onChange={this.handleChange}
                  placeholder=""
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
                htmlFor="title"
                lg={3}
                className="project-details-form-label"
              >
                Title of the Project :*
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".title"
                  id="project-details-projecttitle"
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
                htmlFor="duration-project-details"
                lg={3}
                className="project-details-form-label"
              >
                Duration of Project :
              </Label>
              <Label
                htmlFor="from"
                lg={1}
                className="project-details-form-label"
              >
                From:*
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".from"
                  type="date"
                  id="project-details-from"
                  name="from"
                  className="form-control"
                  placeholder=""
                  value={this.state.from}
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
              <Label htmlFor="to" lg={1} className="project-details-form-label">
                To:*
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".to"
                  type="date"
                  id="project-details-to"
                  name="to"
                  className="form-control"
                  placeholder=""
                  value={this.state.to}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".project-details-to"
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
                className="project-details-form-label"
              >
                Role :*
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".role"
                  id="project-details-role"
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
                htmlFor="mentor"
                lg={3}
                className="project-details-form-label"
              >
                Mentor (if any) :
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".mentor"
                  id="project-details-mentor"
                  name="mentor"
                  className="form-control"
                  placeholder=""
                  value={this.state.mentor}
                  onChange={this.handleChange}
                  validators={{
                    validName,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".mentor"
                  show="touched"
                  messages={{
                    validName: "*Must be a Valid Name ",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="funded"
                lg={3}
                className="project-details-form-label"
              >
                Funded :*
              </Label>
              <Col className="project-details-form-fields funded-col">
                <Control.text
                  model=".funded"
                  type="radio"
                  id="project-details-funded"
                  name="funded"
                  className="form-control"
                  value={this.state.fromDashBoard ? this.state.funded : "true"}
                  placeholder=""
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".funded"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
              <div className="funded-button">Yes</div>
              <Col className="project-details-form-fields funded-col">
                <Control.radio
                  model=".funded"
                  type="radio"
                  id="project-details-funded"
                  name="funded"
                  className="form-control"
                  value={this.state.fromDashBoard ? this.state.funded : "false"}
                  onChange={this.handleChange}
                  placeholder=""
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".funded"
                  show="touched"
                  messages={{
                    required: "*Required ",
                  }}
                />
              </Col>
              <div className="funded-button">No</div>
            </Row>
            <Row>
              <Label
                htmlFor="investor"
                lg={3}
                className="project-details-form-label"
              >
                Investor (if any) :
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".investor"
                  id="project-details-investor"
                  name="investor"
                  className="form-control"
                  placeholder=""
                  value={this.state.investor}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Label
                htmlFor="skillsDeveloped"
                lg={3}
                className="project-details-form-label"
              >
                Skills Developed :*
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".skillsDeveloped"
                  id="project-details-skills"
                  name="skillsDeveloped"
                  className="form-control"
                  placeholder=""
                  value={this.state.skillsDeveloped}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".skillsDeveloped"
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
                className="project-details-form-label"
              >
                Certificate Url :*
              </Label>
              <Col className="project-details-form-fields">
                <Control.text
                  model=".certificateUrl"
                  type="url"
                  id="propject-details-certificateUrl"
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
            <Row className="submit-button-project-details">
              {this.state.fromDashBoard ? (
                <div></div>
              ) : (
                <Button type="submit" id="project-details-save-button">
                  Save <i class="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
            {this.state.fromDashBoard ? (
              <Row className="submit-button-project-details">
                <Button
                  className="mr10"
                  id="project-details-delete-button"
                  onClick={() => {
                    this.props.deleteProjectDetails(this.state._id);
                  }}
                >
                  Delete
                </Button>
                <Button type="submit" id="update-button">
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

export default ProjectDetails;
