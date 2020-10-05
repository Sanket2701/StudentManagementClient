import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './AcademicsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class Academics extends Component {

    render() {
        return (
            <div>
                <Sidebar />
                <div id="title"><h1>Academics</h1></div>
                <div id="academics-form">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="schoolname" className="academics-form-label">Name of School :*</Label>
                            <Col lg={12}>
                                <Control.text model=".schoolname" id="schoolname" name="schoolname" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".schoolname" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="ssc-aggregate" className="academics-form-label">SSC Aggregate :*</Label>
                            <Col lg={12}>
                                <Control.text model=".ssc-aggregate" id="ssc-aggregate" name="ssc-aggregate" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".ssc-aggregate" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="collegename" className="academics-form-label">Name of Junior College :*</Label>
                            <Col lg={12}>
                                <Control.text model=".collegename" id="collegename" name="collegename" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".collegename" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="hsc-aggregate" className="academics-form-label">HSC Aggregate/Diploma Aggregate :*</Label>
                            <Col lg={12}>
                                <Control.text model=".hsc-aggregate" id="hsc-aggregate" name="hsc-aggregate" className="form-control academics-form-fields"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".hsc-aggregate" show="touched"
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
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="current-semester" className="academics-form-label">Current Semester :*</Label>
                            <Col lg={12}>
                                <Control.select model=".current-semester" id="current-semester" name="current-semester" className="form-control academics-form-fields"
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
                                <Errors className="text-danger error-message" model=".current-semester" show="touched"
                                    messages={{
                                        required: '*Required'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="interest" className="academics-form-label">Domain of Interest :*</Label>
                            <Col lg={12}>
                                <Control.text model=".interest" id="interest" name="interest" className="form-control academics-form-fields"
                                    placeholder="" rows="3"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".interest" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="programming-languages" className="academics-form-label">Programming Languages Known :*</Label>
                            <Col lg={12}>
                                <Control.textarea model=".programming-languages" id="programming-languages" name="programming-languages" className="form-control academics-form-fields"
                                    placeholder="" rows="3"
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".programming-languages" show="touched"
                                    messages={{
                                        required: '*Required',
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group submit-button">
                            <Button type="submit" id="save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}
export default Academics