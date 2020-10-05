import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './OnlineCertificationsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class OnlineCertification extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="online-certification-title"><h1>Online Certifications</h1>
                </div>
                <SingleCertification />
            </div>
        );
    }
}

export default OnlineCertification

export class SingleCertification extends Component {
    render() {
        return (
            <div className="single-certification-form">
                <LocalForm>
                    <Row>
                        <Label htmlFor="online-certification-done-during-semester" lg={3} className="online-certification-form-label">Done During Semester :*</Label>
                        <Col className="online-certification-form-fields">
                            <Control.select model=".online-certification-done-during-semester" id="online-certification-done-during-semester" name="online-certification-done-during-semester" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} >
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
                            <Errors className="text-danger error-message" model=".online-certification-done-during-semester" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="online-certification-platform" lg={3} className="online-certification-form-label">Platform :*</Label>
                        <Col className="online-certification-form-fields">
                            <Control.text model=".online-certification-platform" id="online-certification-platform" name="online-certification-platform" className="form-control"
                                placeholder="Udemy, Coursera, etc."
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".online-certification-platform" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="online-certification-domain" lg={3} className="online-certification-form-label">Domain :*</Label>
                        <Col className="online-certification-form-fields">
                            <Control.text model=".online-certification-domain" id="online-certification-domain" name="online-certification-domain" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".online-certification-domain" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="online-certification-title-course" lg={3} className="online-certification-form-label">Title of Course :*</Label>
                        <Col className="online-certification-form-fields">
                            <Control.text model=".online-certification-title-course" id="online-certification-title-course" name="online-certification-title-course" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".online-certification-title-course" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="online-certification-details" lg={3} className="online-certification-form-label">Duration :*</Label>
                        <Label htmlFor="online-certification-from" lg={1} className="online-certification-form-label">From:*</Label>
                        <Col className="online-certification-form-fields">
                            <Control.text model=".online-certification-from" type="date" id="online-certification-from" name="online-certification-from" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".online-certification-from" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                        <Label htmlFor="duration-online-certification-to" lg={1} className="online-certification-form-label">To:*</Label>
                        <Col className="online-certification-form-fields">

                            <Control.text model=".online-certification-to" type="date" id="online-certification-to" name="online-certification-to" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".online-certification-to" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="certificateUrl" lg={3} className="co-curriculars-form-label">Certificate Url :*</Label>
                        <Col className="co-curriculars-form-fields">
                            <Control.text model=".certificateUrl" type="url" id="certificateUrl" name="certificateUrl" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".certificateUrl" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row className="submit-button-online-certification">
                        <Button type="submit" id="online-certification-delete-button">Delete</Button>
                        <Button type="submit" id="online-certification-save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                    </Row>
                </LocalForm>
            </div>
        );
    }
}