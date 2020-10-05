import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './AttendanceComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class Attendance extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="attendance-title"><h1>Attendance</h1></div>
                <div className="single-attendance-form">
                    <LocalForm>
                        <Row>
                            <Label htmlFor="attendance_semester" lg={3} className="attendance-form-label">Semester :*</Label>
                            <Col className="attendance-form-fields">
                                <Control.select model=".attendance_semester" id="attendance_semester" name="attendance_semester" className="form-control"
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
                                <Errors className="text-danger error-message" model=".attendance_semester" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="attendance_theory" lg={3} className="attendance-form-label">Theory Attendance :*</Label>
                            <Col className="attendance-form-fields">
                                <Control.text model=".attendance_theory" id="attendance_theory" name="attendance_theory" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".attendance_theory" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="attendance_practical" lg={3} className="attendance-form-label">Practical Attendance :*</Label>
                            <Col className="attendance-form-fields">
                                <Control.text model=".attendance_practical" id="attendance_practical" name="attendance_practical" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".attendance_practical" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="submit-button-attendance">
                            <Button
                                className="mr10" id="attendance-delete-button">Remove</Button>
                            <Button type="submit" id="attendance-save-button">Save
                                    <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div >
        );
    }
}

export default Attendance;