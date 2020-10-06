import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './AcademicsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;


class Academics extends Component {

    constructor(props) {
        super(props);
        this.handleAcademics = this.handleAcademics.bind(this);
    }

    handleAcademics(values) {
        this.props.postAcademics(values.nameOfSchool, values.sscAggregate, values.nameOfJuniorCollege, values.hscAggregate, values.department,
            values.currentSemester, values.domainOfInterest, values.programmingLanguages);
    }
    render() {
        return (
            <div>
                <Sidebar />
                <div id="title"><h1>Academics</h1></div>
                <div id="academics-form">
                    <Form model="userAcademics" onSubmit={(values) => this.handleAcademics(values)}>
                        <Row className="form-group">
                            <Label htmlFor="schoolname" className="academics-form-label">Name of School :*</Label>
                            <Col lg={12}>
                                <Control.text model=".nameOfSchool" id="schoolname" name="schoolname" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".nameOfSchool" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="ssc-aggregate" className="academics-form-label">SSC Aggregate :*</Label>
                            <Col lg={12}>
                                <Control.text model=".sscAggregate" id="ssc-aggregate" name="ssc-aggregate" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".sscAggregate" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="collegename" className="academics-form-label">Name of Junior College :*</Label>
                            <Col lg={12}>
                                <Control.text model=".nameOfJuniorCollege" id="collegename" name="collegename" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".nameOfJuniorCollege" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="hsc-aggregate" className="academics-form-label">HSC Aggregate/Diploma Aggregate :*</Label>
                            <Col lg={12}>
                                <Control.text model=".hscAggregate" id="hsc-aggregate" name="hsc-aggregate" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".hscAggregate" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="department" className="academics-form-label">Department :*</Label>
                            <Col lg={12}>
                                <Control.select model=".department" id="department" name="department" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} >
                                    <option>Select</option>
                                    <option>COMPUTER</option>
                                    <option>IT</option>
                                    <option>EXTC</option>
                                    <option>ETRX</option>
                                    <option>AIDS</option>
                                </Control.select>
                                <Errors className="text-danger error-message" model=".department" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="current-semester" className="academics-form-label">Current Semester :*</Label>
                            <Col lg={12}>
                                <Control.select model=".currentSemester" id="current-semester" name="current-semester" className="form-control academics-form-fields"
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
                                <Errors className="text-danger error-message" model=".currentSemester" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="interest" className="academics-form-label">Domain of Interest :*</Label>
                            <Col lg={12}>
                                <Control.text model=".domainOfInterest" id="interest" name="interest" className="form-control academics-form-fields"
                                    placeholder="" rows="3"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".domainOfInterest" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="programming-languages" className="academics-form-label">Programming Languages Known :*</Label>
                            <Col lg={12}>
                                <Control.textarea model=".programmingLanguages" id="programming-languages" name="programming-languages" className="form-control academics-form-fields"
                                    placeholder="" rows="3"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".programmingLanguages" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group submit-button">
                            <Button type="submit" id="save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Academics