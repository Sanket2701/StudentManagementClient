import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './Extra-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class ExtraCurriculars extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="extracurricular-title"><h1>Extra-Curriculars</h1></div>
                <div className="single-extracurricular-form">
                    <LocalForm>
                        <Row>
                            <Label htmlFor="extracurricular_done_during_semester" lg={3} className="extracurricular-form-label">Done During Semester :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.select model=".extracurricular_done_during_semester" id="extracurricular_done_during_semester" name="extracurricular_done_during_semester" className="form-control"
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
                                <Errors className="text-danger error-message" model=".extracurricular_done_during_semester" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="extracurricular_activity" lg={3} className="extracurricular-form-label">Activity :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".extracurricular_activity" id="extracurricular_activity" name="extracurricular_activity" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".extracurricular_activity" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="extracurricular_level_of_activity" lg={3} className="extracurricular-form-label">Level of Activity :*</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".extracurricular_level_of_activity" id="extracurricular_level_of_activity" name="extracurricular_level_of_activity" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".extracurricular_level_of_activity" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="extracurricular_position" lg={3} className="extracurricular-form-label">Position (if required) :</Label>
                            <Col className="extracurricular-form-fields">
                                <Control.text model=".extracurricular_position" id="extracurricular_position" name="extracurricular_position" className="form-control"
                                    placeholder=""
                                />
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
                        <Row className="submit-button-extracurricular">
                            <Button
                                className="mr10" id="extracurricular-delete-button">Remove</Button>
                            <Button type="submit" id="extracurricular-save-button">Save
                                    <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default ExtraCurriculars;