import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./PersonalDetailsComponent.css";
import { Row, Col, Button, Label } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);
// const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.reader = new FileReader();
    this.handlePersonalDetails = this.handlePersonalDetails.bind(this);
    this.state = {
      ...window.history.state.state,
      //   selectedFile: null, // to store selected file
      //   handleResponse: null, // handle the API response
      //   imageUrl: null, // to store uploaded image path
      //   invalidImage: null, // handle the message of the image validation
    };
    this.handleChange = this.handleChange.bind(this);
    // this.onChangeFile = this.onChangeFile.bind(this);
  }

  handlePersonalDetails(values) {
    this.state.fromDashBoard
      ? this.props.patchPersonalDetails(
          this.state._id,
          values.firstname,
          values.middlename,
          values.lastname,
          values.collegeId,
          values.dateOfBirth,
          values.contact,
          values.contactParent,
          values.address,
          values.addressPermanent,
          "Abd"
        )
      : this.props.postPersonalDetails(
          values.firstname,
          values.middlename,
          values.lastname,
          values.collegeId,
          values.dateOfBirth,
          values.contact,
          values.contactParent,
          values.address,
          values.addressPermanent,
          "Abd"
        );
  }
  handleChange(event) {
    let key = event.target.name;
    console.log(this.state);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [key]: event.target.value,
    });
  }

  //   onChangeFile = (event) => {
  //     const imageFile = event.target.files[0];

  //     if (!imageFile) {
  //       this.setState({ invalidImage: "Please select image." });
  //       return false;
  //     }

  //     if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
  //       this.setState({ invalidImage: "Please select valid image." });
  //       return false;
  //     }
  //     if (imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
  //       this.setState({
  //         selectedFile: imageFile,
  //       });
  //     }
  //   };
  render() {
    return (
      <div>
        <Sidebar />
        <div id="title">
          <h1>Personal Details</h1>
        </div>
        <div id="personal-details-form">
          <Form
            model="userPersonalDetails"
            onSubmit={(values) => this.handlePersonalDetails(values)}
          >
            {/* <Row className=" form-group ">
                            <img src="" alt="Photo" className="image" />
                            <Control.file model=".profilepicture" id="profilepicture" name="profilepicture" className="form-control"
                            />
                        </Row> */}
            {/* {this.state.invalidImage && (
              <p className="error">{this.state.invalidImage}</p>
            )}
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  value={this.state.selectedFile}
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  onChange={this.onChangeFile}
                ></input>
                <label class="custom-file-label" for="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
            {this.state.handleResponse && (
              <p
                className={
                  this.state.handleResponse.isSuccess ? "success" : "error"
                }
              >
                {this.state.handleResponse.message}
              </p>
            )} */}
            <Row className="form-group">
              <Label
                htmlFor="firstname"
                className="personal-details-form-label"
              >
                First Name :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".firstname"
                  id="firstname"
                  name="firstname"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "*Required ",
                    maxLength: "*Must be 15 characters or less ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label
                htmlFor="middlename"
                className="personal-details-form-label"
              >
                Middle Name :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".middlename"
                  id="middlename"
                  name="middlename"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  value={this.state.middlename}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".middlename"
                  show="touched"
                  messages={{
                    required: "*Required",
                    maxLength: "*Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastname" className="personal-details-form-label">
                Last Name :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".lastname"
                  id="lastname"
                  name="lastname"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: "*Required",
                    maxLength: "*Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label
                htmlFor="collegeId"
                className="personal-details-form-label"
              >
                Id Card Number :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".collegeId"
                  id="collegeId"
                  name="collegeId"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  value={this.state.collegeId}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".collegeId"
                  show="touched"
                  messages={{
                    required: "*Required",
                    isNumber: "*Must be a Number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label
                htmlFor="dateOfBirth"
                className="personal-details-form-label"
              >
                Date of Birth :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".dateOfBirth"
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="form-control personal-details-form-fields"
                  placeholder="dd/mm/yyyy"
                  value={this.state.dateOfBirth}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".dateOfBirth"
                  show="touched"
                  messages={{
                    required: "*Required",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="contact" className="personal-details-form-label">
                Contact Number :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".contact"
                  id="contact"
                  name="contact"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  value={this.state.contact}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".contact"
                  show="touched"
                  messages={{
                    required: "*Required",
                    isNumber: "*Must be a Number",
                    minLength: "*Must be Exactly 10 Numbers",
                    maxLength: "*Must be Exactly 10 Numbers",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label
                htmlFor="contactParent"
                className="personal-details-form-label"
              >
                Parents Contact Number :*
              </Label>
              <Col lg={12}>
                <Control.text
                  model=".contactParent"
                  id="contactParent"
                  name="contactParent"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  value={this.state.contactParent}
                  onChange={this.handleChange}
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".contactParent"
                  show="touched"
                  messages={{
                    required: "*Required",
                    isNumber: "*Must be a Number",
                    minLength: "*Must be Exactly 10 Numbers",
                    maxLength: "*Must be Exactly 10 Numbers",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="address" className="personal-details-form-label">
                Address of Correspondance :*
              </Label>
              <Col lg={12}>
                <Control.textarea
                  model=".address"
                  id="address"
                  name="address"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  rows="3"
                  value={this.state.address}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".address"
                  show="touched"
                  messages={{
                    required: "*Required",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label
                htmlFor="addressPermanent"
                className="personal-details-form-label"
              >
                Permanent Address :*
              </Label>
              <Col lg={12}>
                <Control.textarea
                  model=".addressPermanent"
                  id="addressPermanent"
                  name="addressPermanent"
                  className="form-control personal-details-form-fields"
                  placeholder=""
                  rows="3"
                  value={this.state.addressPermanent}
                  onChange={this.handleChange}
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger error-message"
                  model=".addressPermanent"
                  show="touched"
                  messages={{
                    required: "*Required",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group submit-button">
              {this.state.fromDashBoard ? (
                <div></div>
              ) : (
                <Button type="submit" id="save-button">
                  Save <i className="fa fa-arrow-right"></i>
                </Button>
              )}
            </Row>
          </Form>
          {this.state.fromDashBoard ? (
            <Button
              id="update-button"
              onClick={(values) => {
                this.props.patchPersonalDetails(
                  this.state._id,
                  values.firstname,
                  values.middlename,
                  values.lastname,
                  values.collegeId,
                  values.dateOfBirth,
                  values.contact,
                  values.contactParent,
                  values.address,
                  values.addressPermanent,
                  "Abd"
                );
              }}
            >
              Update <i className="fa fa-arrow-right"></i>
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
export default PersonalDetails;
