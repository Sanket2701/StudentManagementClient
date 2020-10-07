import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './AttendanceComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class AttendanceComponent extends Component {

    constructor(props) {
        super(props);
        this.handleAttendance = this.handleAttendance.bind(this);
    }

    handleAttendance(values) {
        this.props.postAttendance(values.semester, values.theoryAttendance, values.praticalAttendance);
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div id="attendance-title"><h1>Attendance</h1></div>
                <div className="single-attendance-form">
                    <Form model="userAttendance" onSubmit={(values) => this.handleAttendance(values)}>
                        <Row>
                            <Label htmlFor="semester" lg={3} className="attendance-form-label">Semester :*</Label>
                            <Col className="attendance-form-fields">
                                <Control.select model=".semester" id="attendance_semester" name="semester" className="form-control"
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
                            <Label htmlFor="tAttendance" lg={3} className="attendance-form-label">Theory Attendance :*</Label>
                            <Col className="attendance-form-fields">
                                <Control.text model=".theoryAttendance" id="tAttendance" name="theoryAttendance" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".theoryAttendance" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="pAttendance" lg={3} className="attendance-form-label">Practical Attendance :*</Label>
                            <Col className="attendance-form-fields">
                                <Control.text model=".praticalAttendance" id="pAttendance" name="praticalAttendance" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".praticalAttendance" show="touched"
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
                    </Form>
                </div>
            </div >
        );
    }
}

export default AttendanceComponent;