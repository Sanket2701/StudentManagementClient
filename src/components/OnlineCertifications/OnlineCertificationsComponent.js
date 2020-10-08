import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './OnlineCertificationsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class OnlineCertification extends Component {

    constructor(props) {
        super(props);
        this.handleOnlineCertification = this.handleOnlineCertification.bind(this);
    }

    handleOnlineCertification(values) {
        this.props.postOnlineCertifications(values.semester, values.platform, values.domain,
            values.title, values.from, values.to, values.certificateUrl);
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div id="online-certification-title"><h1>Online Certifications</h1>
                </div>
                <div className="single-certification-form">
                    <Form model="userOnlineCertification" onSubmit={(values) => this.handleOnlineCertification(values)}>
                        <Row>
                            <Label htmlFor="semester" lg={3} className="online-certification-form-label">Done During Semester :*</Label>
                            <Col className="online-certification-form-fields">
                                <Control.select model=".semester" id="online-certification-done-during-semester" name="semester" className="form-control"
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
                                <Errors className="text-danger error-message" model=".semester" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="platform" lg={3} className="online-certification-form-label">Platform :*</Label>
                            <Col className="online-certification-form-fields">
                                <Control.text model=".platform" id="online-certification-platform" name="platform" className="form-control"
                                    placeholder="Udemy, Coursera, Nptel, etc."
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".platform" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="domain" lg={3} className="online-certification-form-label">Domain :*</Label>
                            <Col className="online-certification-form-fields">
                                <Control.text model=".domain" id="online-certification-domain" name="domain" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".domain" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="title" lg={3} className="online-certification-form-label">Title of Course :*</Label>
                            <Col className="online-certification-form-fields">
                                <Control.text model=".title" id="online-certification-title-course" name="title" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".title" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="online-certification-details" lg={3} className="online-certification-form-label">Duration :*</Label>
                            <Label htmlFor="from" lg={1} className="online-certification-form-label">From:*</Label>
                            <Col className="online-certification-form-fields">
                                <Control.text model=".from" type="date" id="online-certification-from" name="from" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".from" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                            <Label htmlFor="to" lg={1} className="online-certification-form-label">To:*</Label>
                            <Col className="online-certification-form-fields">

                                <Control.text model=".to" type="date" id="online-certification-to" name="to" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".to" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="certificateUrl" lg={3} className="online-certification-form-label">Certificate Url :*</Label>
                            <Col className="online-certification-form-fields">
                                <Control.text model=".certificateUrl" type="url" id="online-certification-certificateUrl" name="certificateUrl" className="form-control"
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
                    </Form>
                </div>
            </div>
        );
    }
}

export default OnlineCertification;