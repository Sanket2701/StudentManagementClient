import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './Co-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class CoCurriculars extends Component {

    render() {
        return (
            <div>
                <Sidebar />
                <div id="co-curriculars-title"><h1>Co Curriculars</h1></div>
                <SingleStudentBody />
                <SingleProjectCompetition />
                <SingleStudentPublication />
            </div>
        );
    }
}

export default CoCurriculars

export class SingleStudentBody extends Component {
    render() {
        return (
            <div className="student-body-form">
                <div className="student-body-heading"><h3>Student Body Details</h3>
                </div>
                <div className="single-student-body-form">
                    <LocalForm>
                        <Row>
                            <Label htmlFor="student-body-year" lg={3} className="co-curriculars-form-label">Year :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-body-year" id="student-body-year" name="student-body-year" className="form-control"
                                    placeholder="Academic Year"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-body-year" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-body-committee-name" lg={3} className="co-curriculars-form-label">Committee Name :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-body-committee-name" id="student-body-committee-name" name="student-body-committee-name" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required, validName
                                    }} />
                                <Errors className="text-danger error-message" model=".student-body-committee-name" show="touched"
                                    messages={{
                                        required: '*Required ',
                                        validName: '*Must be a Valid Name'
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-body-post" lg={3} className="co-curriculars-form-label">Post :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-body-post" id="student-body-post" name="student-body-post" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required, validName
                                    }} />
                                <Errors className="text-danger error-message" model=".student-body-post" show="touched"
                                    messages={{
                                        required: '*Required ',
                                        validName: '*Must be a Valid Name'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="submit-button-student-body">
                            <Button type="submit" id="student-body-delete-button">Delete</Button>
                            <Button type="submit" id="student-body-save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export class SingleProjectCompetition extends Component {
    render() {
        return (
            <div className="project-competition-form">
                <div className="project-competition-heading"><h3>Project Competition Details</h3>
                </div>
                <div className="single-project-competition-form">
                    <LocalForm>
                        <Row>
                            <Label htmlFor="project-competition-year" lg={3} className="co-curriculars-form-label">Year :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".project-competition-year" id="project-competition-year" name="project-competition-year" className="form-control"
                                    placeholder="Academic Year"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".project-competition-year" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="project-competition-name" lg={3} className="co-curriculars-form-label">Competition Name :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".project-competition-name" id="project-competition-name" name="project-competition-name" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".project-competition-name" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="project-competition-title" lg={3} className="co-curriculars-form-label">Project Title :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".project-competition-title" id="project-competition-title" name="project-competition-title" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".project-competition-title" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="project-competition-role" lg={3} className="co-curriculars-form-label">Role :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".project-competition-role" id="project-competition-role" name="project-competition-role" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".project-competition-role" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="project-competition-position" lg={3} className="co-curriculars-form-label">Position (if acquired) :</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".project-competition-position" id="project-competition-position" name="project-competition-position" className="form-control"
                                    placeholder=""
                                />
                            </Col>
                        </Row>
                        <Row className="submit-button-student-body">
                            <Button type="submit" id="student-body-delete-button">Delete</Button>
                            <Button type="submit" id="student-body-save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export class SingleStudentPublication extends Component {
    render() {
        return (
            <div className="student-publication-form">
                <div className="student-publication-heading"><h3>Student Publication Details</h3>
                </div>
                <div className="single-student-publication-form">
                    <LocalForm>
                        <Row>
                            <Label htmlFor="student-publication-title" lg={3} className="co-curriculars-form-label">Title :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-title" id="student-publication-title" name="student-publication-title" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-title" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-year" lg={3} className="co-curriculars-form-label">Year :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-year" id="student-publication-year" name="student-publication-year" className="form-control"
                                    placeholder="Academic Year"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-year" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-author" lg={3} className="co-curriculars-form-label">Author :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-author" id="student-publication-author" name="student-publication-author" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-author" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-url" lg={3} className="co-curriculars-form-label">Project Title :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-url" id="student-publication-url" name="student-publication-url" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-url" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-date" lg={3} className="co-curriculars-form-label">Date of Issue :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-date" id="student-publication-date" name="student-publication-date" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-date" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-vol" lg={3} className="co-curriculars-form-label">Volume :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-vol" id="student-publication-vol" name="student-publication-vol" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-vol" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-page" lg={3} className="co-curriculars-form-label">Page Number :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-page" id="student-publication-page" name="student-publication-page" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-page" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-publisher" lg={3} className="co-curriculars-form-label">Publisher :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-publisher" id="student-publication-publisher" name="student-publication-publisher" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-publisher" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-isbn" lg={3} className="co-curriculars-form-label">ISBN/E-ISSN :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.text model=".student-publication-isbn" id="student-publication-isbn" name="student-publication-isbn" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".student-publication-isbn" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-paper-type" lg={3} className="co-curriculars-form-label">Paper Type :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.select model=".student-publication-paper-type" id="student-publication-paper-type" name="student-publication-paper-type" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} >
                                    <option>Select</option>
                                    <option>Journal</option>
                                    <option>Conference</option>
                                </Control.select>
                                <Errors className="text-danger error-message" model=".student-publication-paper-type" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="student-publication-paper-level" lg={3} className="co-curriculars-form-label">Paper Level :*</Label>
                            <Col className="co-curriculars-form-fields">
                                <Control.select model=".student-publication-paper-level" id="student-publication-paper-level" name="student-publication-paper-level" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} >
                                    <option>Select</option>
                                    <option>National</option>
                                    <option>International</option>
                                </Control.select>
                                <Errors className="text-danger error-message" model=".student-publication-paper-level" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>

                        <Row className="submit-button-student-body">
                            <Button type="submit" id="student-body-delete-button">Delete</Button>
                            <Button type="submit" id="student-body-save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}