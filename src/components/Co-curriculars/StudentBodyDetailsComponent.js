import React, { Component } from 'react';
import './Co-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class StudentBodyDetailsComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleStudentBodyDetails = this.handleStudentBodyDetails.bind(this);
    }

    handleStudentBodyDetails(values) {
        this.props.postStudentBodyDetails(values.year, values.name, values.post);
    }

    render() {
        return (
            <div className="student-body-form">
                <div className="student-body-heading"><h3>Student Body Details</h3>
                </div>
                <div className="single-student-body-form">
                    <Form model="userStudentBodyDetails" onSubmit={(values) => this.handleStudentBodyDetails(values)}>
                        <Row>
                            <Label htmlFor="year" lg={3} className="co-curriculars-form-label">Year :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".year" id="student-body-year" name="year" className="form-control"
                                    placeholder="Academic Year"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".year" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="name" lg={3} className="co-curriculars-form-label">Committee Name :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".name" id="student-body-name" name="name" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required, validName
                                    }} />
                                <Errors className="text-danger error-message" model=".name" show="touched"
                                    messages={{
                                        required: '*Required ',
                                        validName: '*Must be a Valid Name'
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="post" lg={3} className="co-curriculars-form-label">Post :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".post" id="student-body-post" name="post" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required, validName
                                    }} />
                                <Errors className="text-danger error-message" model=".post" show="touched"
                                    messages={{
                                        required: '*Required ',
                                        validName: '*Must be a Valid Name'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="submit-button-student-body">
                            <Button id="student-body-delete-button">Delete</Button>
                            <Button type="submit" id="student-body-save-button">Save  <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default StudentBodyDetailsComponent;