import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './Extra-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class ExtraCurriculars extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.handleExtraCurriculars = this.handleExtraCurriculars.bind(this);
    }

    handleExtraCurriculars(values) {
        this.props.postExtraCurriculars(values.semester, values.activity, values.levelActivity,
            values.position, values.certificateUrl);
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div id="extracurricular-title"><h1>Extra-Curriculars</h1></div>
                <div className="single-extracurricular-form">
                    <Form model="userExtraCurriculars" onSubmit={(values) => this.handleExtraCurriculars(values)}>
                        <Row>
                            <Label htmlFor="semester" lg={3} className="extracurricular-form-label">Done During Semester :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.select model=".semester" id="extra-curricular-semester" name="semester" className="form-control"
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
                            <Label htmlFor="activity" lg={3} className="extracurricular-form-label">Activity :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".activity" id="extra-curricular-activity" name="activity" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".activity" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="levelActivity" lg={3} className="extracurricular-form-label">Level of Activity :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".levelActivity" id="extra-curricular-levelActivity" name="levelActivity" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".levelActivity" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="position" lg={3} className="extracurricular-form-label">Position (if acquired) :</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".position" id="extra-curricular-position" name="position" className="form-control"
                                    placeholder=""
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="certificateUrl" lg={3} className="extracurricular-form-label">Certificate Url :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".certificateUrl" type="url" id="extra-curricular-certificateUrl" name="certificateUrl" className="form-control"
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
                        <Row className="submit-button-extracurricular">
                            <Button
                                className="mr10" id="extracurricular-delete-button">Remove</Button>
                            <Button type="submit" id="extracurricular-save-button">Save
                                    <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ExtraCurriculars;