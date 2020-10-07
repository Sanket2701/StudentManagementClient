import React, { Component } from 'react';
import './Co-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

export class StudentProjectCompetitionComponent extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.handleStudentProjectCompetition = this.handleStudentProjectCompetition.bind(this);
    }

    handleStudentProjectCompetition(values) {
        this.props.postStudentProjectCompetition(values.year, values.competitionName, values.projectTitle, values.role,
            values.position, values.certificateUrl)
    }

    render() {
        return (
            <div className="project-competition-form">
                <div className="project-competition-heading"><h3>Project Competition Details</h3>
                </div>
                <div className="single-project-competition-form">
                    <Form model="userStudentProjectCompetition" onSubmit={(values) => this.handleStudentProjectCompetition(values)}>
                        <Row>
                            <Label htmlFor="year" lg={3} className="co-curriculars-form-label">Year :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".year" id="project-competition-year" name="year" className="form-control"
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
                            <Label htmlFor="competitionName" lg={3} className="co-curriculars-form-label">Competition Name :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".competitionName" id="project-competition-competitionName" name="competitionName" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".competitionName" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="projectTitle" lg={3} className="co-curriculars-form-label">Project Title :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".projectTitle" id="project-competition-projectTitle" name="projectTitle" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".projectTitle" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="role" lg={3} className="co-curriculars-form-label">Role :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".role" id="project-competition-role" name="role" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".role" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="position" lg={3} className="co-curriculars-form-label">Position (if acquired) :</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".position" id="project-competition-position" name="position" className="form-control"
                                    placeholder=""
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="certificateUrl" lg={3} className="co-curriculars-form-label">Certificate Url :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".certificateUrl" type="url" id="project-competition-certificateUrl" name="certificateUrl" className="form-control"
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
                        <Row className="submit-button-student-body">
                            <Button type="submit" id="student-body-delete-button">Delete</Button>
                            <Button type="submit" id="student-body-save-button">Save  <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default StudentProjectCompetitionComponent;