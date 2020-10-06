import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './PersonalDetailsComponent.css';
import { Row, Col, Button, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);
// const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.handlePersonalDetails = this.handlePersonalDetails.bind(this);
    }

    handlePersonalDetails(values) {
        this.props.postPersonalDetails(values.firstname, values.middlename, values.lastname, values.collegeId,
            values.dateOfBirth, values.contact, values.contactParent, values.address, values.addressPermanent, 'Abd');
    }
    render() {
        return (
            <div>
                <Sidebar />
                <div id="title"><h1>Personal Details</h1></div>
                <div id="personal-details-form">
                    <Form model="userPersonalDetails" onSubmit={(values) => this.handlePersonalDetails(values)}>
                        {/* <Row className=" form-group ">
                            <img src="" alt="Photo" className="image" />
                            <Control.file model=".profilepicture" id="profilepicture" name="profilepicture" className="form-control"
                            />
                        </Row> */}
                        <Row className="form-group">
                            <Label htmlFor="firstname" className="personal-details-form-label">First Name :*</Label>
                            <Col lg={12}>
                                <Control.text model=".firstname" id="firstname" name="firstname" className="form-control personal-details-form-fields"
                                    placeholder=""
                                    validators={{
                                        required, maxLength: maxLength(15)
                                    }} />
                                <Errors className="text-danger error-message" model=".firstname" show="touched"
                                    messages={{
                                        required: '*Required ',
                                        maxLength: '*Must be 15 characters or less ',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="middlename" className="personal-details-form-label">Middle Name :*</Label>
                            <Col lg={12}>
                                <Control.text model=".middlename" id="middlename" name="middlename" className="form-control personal-details-form-fields"
                                    placeholder=""
                                    validators={{
                                        required, maxLength: maxLength(15)
                                    }} />
                                <Errors className="text-danger error-message" model=".middlename" show="touched"
                                    messages={{
                                        required: '*Required',
                                        maxLength: '*Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" className="personal-details-form-label">Last Name :*</Label>
                            <Col lg={12}>
                                <Control.text model=".lastname" id="lastname" name="lastname" className="form-control personal-details-form-fields"
                                    placeholder=""
                                    validators={{
                                        required, maxLength: maxLength(15)
                                    }} />
                                <Errors className="text-danger error-message" model=".lastname" show="touched"
                                    messages={{
                                        required: '*Required',
                                        maxLength: '*Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="collegeId" className="personal-details-form-label">Id Card Number :*</Label>
                            <Col lg={12}>
                                <Control.text model=".collegeId" id="collegeId" name="collegeId" className="form-control personal-details-form-fields"
                                    placeholder=""
                                    validators={{
                                        required, isNumber
                                    }} />
                                <Errors className="text-danger error-message" model=".collegeId" show="touched"
                                    messages={{
                                        required: '*Required',
                                        isNumber: '*Must be a Number'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="dateOfBirth" className="personal-details-form-label">Date of Birth :*</Label>
                            <Col lg={12}>
                                <Control.text model=".dateOfBirth" type="date" id="dateOfBirth" name="dateOfBirth" className="form-control personal-details-form-fields"
                                    placeholder="dd/mm/yyyy"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".dateOfBirth" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="contact" className="personal-details-form-label">Contact Number :*</Label>
                            <Col lg={12}>
                                <Control.text model=".contact" id="contact" name="contact" className="form-control personal-details-form-fields"
                                    placeholder=""
                                    validators={{
                                        required, isNumber, minLength: minLength(10), maxLength: maxLength(10)
                                    }} />
                                <Errors className="text-danger error-message" model=".contact" show="touched"
                                    messages={{
                                        required: '*Required',
                                        isNumber: '*Must be a Number',
                                        minLength: '*Must be Exactly 10 Numbers',
                                        maxLength: '*Must be Exactly 10 Numbers'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="contactParent" className="personal-details-form-label">Parents Contact Number :*</Label>
                            <Col lg={12}>
                                <Control.text model=".contactParent" id="contactParent" name="contactParent" className="form-control personal-details-form-fields"
                                    placeholder=""
                                    validators={{
                                        required, isNumber, minLength: minLength(10), maxLength: maxLength(10)
                                    }} />
                                <Errors className="text-danger error-message" model=".parentnumber" show="touched"
                                    messages={{
                                        required: '*Required',
                                        isNumber: '*Must be a Number',
                                        minLength: '*Must be Exactly 10 Numbers',
                                        maxLength: '*Must be Exactly 10 Numbers'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="address" className="personal-details-form-label">Address of Correspondance :*</Label>
                            <Col lg={12}>
                                <Control.textarea model=".address" id="address" name="address" className="form-control personal-details-form-fields"
                                    placeholder="" rows="3"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".address" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="addressPermanent" className="personal-details-form-label">Permanent Address :*</Label>
                            <Col lg={12}>
                                <Control.textarea model=".addressPermanent" id="addressPermanent" name="addressPermanent" className="form-control personal-details-form-fields"
                                    placeholder="" rows="3"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".p-address" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group submit-button">
                            <Button type="submit" id="save-button">Save  <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}
export default PersonalDetails