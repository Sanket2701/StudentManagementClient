import React, { Component } from 'react';
import './Co-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class StudentPublicationComponent extends Component {

    constructor(props) {
        super(props);
        this.handleStudentPublication = this.handleStudentPublication.bind(this);
    }

    handleStudentPublication(values) {
        this.props.postStudentPublication(values.title, values.year, values.author, values.dateOfIssue,
            values.volume, values.pageNumber, values.publisher, values.isbn, values.paperType,
            values.paperLevel, values.certificateUrl);
    }

    render() {
        return (
            <div className="student-publication-form">
                <div className="student-publication-heading"><h3>Student Publication Details</h3>
                </div>
                <div className="single-student-publication-form">
                    <Form model="userStudentPublication" onSubmit={(values) => this.handleStudentPublication(values)}>
                        <Row>
                            <Label htmlFor="title" lg={3} className="co-curriculars-form-label">Title :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".title" id="publication-title" name="title" className="form-control"
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
                            <Label htmlFor="year" lg={3} className="co-curriculars-form-label">Year :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".year" id="publication-year" name="year" className="form-control"
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
                            <Label htmlFor="author" lg={3} className="co-curriculars-form-label">Author :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".author" id="publication-author" name="author" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".author" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="dateOfIssue" lg={3} className="co-curriculars-form-label">Date of Issue :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".dateOfIssue" type="date" id="student-publication-date" name="dateOfIssue" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".dateOfIssue" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="volume" lg={3} className="co-curriculars-form-label">Volume :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".volume" id="student-publication-volume" name="volume" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".volume" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="pageNumber" lg={3} className="co-curriculars-form-label">Page Number :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".pageNumber" id="pageNumber" name="pageNumber" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".pageNumber" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="publisher" lg={3} className="co-curriculars-form-label">Publisher :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".publisher" id="publication-publisher" name="publisher" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".publisher" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="isbn" lg={3} className="co-curriculars-form-label">ISBN/E-ISSN :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".isbn" id="publication-isbn" name="isbn" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".isbn" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="paperType" lg={3} className="co-curriculars-form-label">Paper Type :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.select model=".paperType" id="publication-paperType" name="paperType" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} >
                                    <option>Select</option>
                                    <option>Journal</option>
                                    <option>Conference</option>
                                </Control.select>
                                <Errors className="text-danger error-message" model=".paperType" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="paperLevel" lg={3} className="co-curriculars-form-label">Paper Level :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.select model=".paperLevel" id="publication-paperLevel" name="paperLevel" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} >
                                    <option>Select</option>
                                    <option>National</option>
                                    <option>International</option>
                                </Control.select>
                                <Errors className="text-danger error-message" model=".paperLevel" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="certificateUrl" lg={3} className="co-curriculars-form-label">Certificate Url :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".certificateUrl" type="url" id="publication-certificateUrl" name="certificateUrl" className="form-control"
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

export default StudentPublicationComponent;