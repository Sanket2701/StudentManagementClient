import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './ProjectDetailsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class ProjectDetails extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="project-details-title"><h1>Project Details</h1>
                </div>
                <SingleProject />
            </div>
        );
    }
}

export default ProjectDetails

export class SingleProject extends Component {
    render() {
        return (
            <div className="single-project-form">
                <LocalForm>
                    <Row>
                        <Label htmlFor="project-details-done-during-semester" lg={3} className="project-details-form-label">Done During Semester :*</Label>
                        <Col className="project-details-form-fields">
                            <Control.select model=".project-details-done-during-semester" id="project-details-done-during-semester" name="project-details-done-during-semester" className="form-control"
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
                            <Errors className="text-danger error-message" model=".project-details-done-during-semester" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="project-details-projecttitle" lg={3} className="project-details-form-label">Title of the Project :*</Label>
                        <Col className="project-details-form-fields">
                            <Control.text model=".project-details-projecttitle" id="project-details-projecttitle" name="project-details-projecttitle" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".project-details-projecttitle" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="duration-project-details" lg={3} className="project-details-form-label">Duration of Project :</Label>
                        <Label htmlFor="project-details-from" lg={1} className="project-details-form-label">From:*</Label>
                        <Col className="project-details-form-fields">

                            <Control.text model=".project-details-from" type="date" id="project-details-from" name="project-details-from" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".project-details-from" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                        <Label htmlFor="duration-project-to" lg={1} className="project-details-form-label">To:*</Label>
                        <Col className="project-details-form-fields">

                            <Control.text model=".project-details-to" type="date" id="project-details-to" name="project-details-to" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".project-details-to" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="project-details-role" lg={3} className="project-details-form-label">Role :*</Label>
                        <Col className="project-details-form-fields">
                            <Control.text model=".project-details-role" id="project-details-role" name="project-details-role" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".project-details-role" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="project-details-mentor" lg={3} className="project-details-form-label">Mentor (if any) :</Label>
                        <Col className="project-details-form-fields">
                            <Control.text model=".project-details-mentor" id="project-details-mentor" name="project-details-mentor" className="form-control"
                                placeholder=""
                                validators={{
                                    validName
                                }}
                            />
                            <Errors className="text-danger error-message" model=".project-details-mentor" show="touched"
                                messages={{
                                    validName: '*Must be a Valid Name ',
                                }} />

                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="project-details-funded" lg={3} className="project-details-form-label">Funded :*</Label>
                        <Col className="project-details-form-fields funded-col">
                            <Control.text model=".project-details-funded" type="radio" id="project-details-funded" name="project-details-funded" className="form-control"
                                value="Yes-funded"
                                placeholder=""
                                validators={{
                                    required
                                }}
                            />
                            <Errors className="text-danger error-message" model=".project-details-funded" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />

                        </Col><div className="funded-button">Yes</div>
                        <Col className="project-details-form-fields funded-col">
                            <Control.radio model=".project-details-funded" type="radio" id="project-details-funded" name="project-details-funded" className="form-control"
                                value="No-funded"
                                placeholder=""
                                validators={{
                                    required
                                }}
                            />
                            <Errors className="text-danger error-message" model=".project-details-funded" show="touched"
                                messages={{
                                    required: '*Required ',
                                }} />

                        </Col><div className="funded-button">No</div>
                    </Row>
                    <Row>
                        <Label htmlFor="project-details-mentor" lg={3} className="project-details-form-label">Investor (if any) :</Label>
                        <Col className="project-details-form-fields">
                            <Control.text model=".project-details-mentor" id="project-details-mentor" name="project-details-mentor" className="form-control"
                                placeholder=""

                            />
                        </Col>
                    </Row>
                    <Row>
                        <Label htmlFor="project-details-skills" lg={3} className="project-details-form-label">Skills Developed :*</Label>
                        <Col className="project-details-form-fields">
                            <Control.text model=".project-details-skills" id="project-details-skills" name="project-details-skills" className="form-control"
                                placeholder=""
                                validators={{
                                    required
                                }} />
                            <Errors className="text-danger error-message" model=".project-details-skills" show="touched"
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
                    <Row className="submit-button-project-details">
                        <Button type="submit" id="project-details-delete-button">Delete</Button>
                        <Button type="submit" id="project-details-save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                    </Row>
                </LocalForm>
            </div>
        );
    }
}