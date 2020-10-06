import React, { Component, useState } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './InternshipsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Form, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

export function InternshipList() {
    const [inputList, setInputList] = useState([{
        semester: "", companyName: "", duration: "",
        domain: "", stipend: ""
    }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = (e) => {

        setInputList([...inputList, {
            semester: "", companyName: "", duration: "",
            domain: "", stipend: ""
        }]);

    };

    // const validate = (companyName) => {
    //     const errors = {
    //         companyName : ''
    //     };
    //     alert("hello");
    //     // if (this.state.touched.firstname && firstname.length < 3)
    //     //     errors.firstname = 'First Name should be >= 3 characters';
    //     // else if (this.state.touched.firstname && firstname.length > 10)
    //     //     errors.firstname = 'First Name should be <= 10 characters';

    //     // if (this.state.touched.lastname && lastname.length < 3)
    //     //     errors.lastname = 'Last Name should be >= 3 characters';
    //     // else if (this.state.touched.lastname && lastname.length > 10)
    //     //     errors.lastname = 'Last Name should be <= 10 characters';

    //     // const reg = /^\d+$/;
    //     // if (this.state.touched.telnum && !reg.test(telnum))
    //     //     errors.telnum = 'Tel. Number should contain only numbers';

    //     // if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
    //     //     errors.email = 'Email should contain a @';

    //     if(companyName.length < 1)
    //         errors.companyName = 'Required';
    //         console.log("hello");

    //     return errors;
    // }
    //const errors = validate(props.companyName);
    return (
        <div>
            <Sidebar />
            <div id="internship-title"><h1>Internships</h1><svg aria-hidden="true" onClick={handleAddClick} focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14 plus-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
            </div>

            <div className="all-internships">
                {inputList.map((x, i) => {
                    return (

                        <div className="single-internship-form xyz">
                            <LocalForm className="internship-form">
                                <Row>
                                    <Label htmlFor="semester" lg={3} className="internship-form-label">Done During Semester :*</Label>
                                    <Col className="internship-form-fields">
                                        <Control.select model=".semester" id="semester" name="semester" className="form-control"
                                            placeholder=""
                                            value={x.semester}
                                            onChange={e => handleInputChange(e, i)}
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
                                    <Label htmlFor="companyName" lg={3} className="internship-form-label">Name of the Company :*</Label>
                                    <Col className="internship-form-fields">
                                        <Control.text model=".companyName" id="companyName" name="companyName" className="form-control"
                                            placeholder=""
                                            value={x.companyName}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".companyName" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                        {/* <FormFeedback>{errors.companyName}</FormFeedback>   */}
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="duration" lg={3} className="internship-form-label">Duration of Internship :*</Label>
                                    <Col className="internship-form-fields">
                                        <Control.text model=".duration" id="duration" name="duration" className="form-control"
                                            placeholder=""
                                            value={x.duration}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".duration" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="domain" lg={3} className="internship-form-label">Domain of Internship :*</Label>
                                    <Col className="internship-form-fields">
                                        <Control.text model=".domain" id="domain" name="domain" className="form-control"
                                            placeholder=""
                                            value={x.domain}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".domain" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="stipend" lg={3} className="internship-form-label">Stipend (if paid) :</Label>
                                    <Col className="internship-form-fields">
                                        <Control.text model=".stipend" id="stipend" name="stipend" className="form-control"
                                            placeholder=""
                                            value={x.stipend}
                                            onChange={e => handleInputChange(e, i)}
                                        />

                                    </Col>
                                </Row>
                                <Row className="submit-button-internship">
                                    <Button
                                        className="mr10" id="internship-delete-button"
                                        onClick={() => handleRemoveClick(i)}>Remove</Button>
                                    <Button type="submit" id="internship-save-button">Save  <i className="fa fa-arrow-right"></i></Button>
                                </Row>
                            </LocalForm>
                        </div>
                    );

                })}
            </div>
        </div>
    );
}

class Internship extends Component {

    constructor(props) {
        super(props);
        this.handleInternships = this.handleInternships.bind(this);
    }

    handleInternships(values) {
        this.props.postInternships(values.semester, values.companyName, values.duration, values.domain,
            values.stipend, values.certificateUrl);
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div id="internship-title"><h1>Internships</h1></div>
                <div className="single-internship-form">
                    <Form model="userInternships" onSubmit={(values) => this.handleInternships(values)}>
                        <Row>
                            <Label htmlFor="semester" lg={3} className="internship-form-label">Done During Semester :*</Label>
                            <Col className="internship-form-fields">
                                <Control.select model=".semester" id="semester" name="semester" className="form-control"
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
                            <Label htmlFor="companyName" lg={3} className="internship-form-label">Name of the Company :*</Label>
                            <Col className="internship-form-fields">
                                <Control.text model=".companyName" id="companyName" name="companyName" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".companyName" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="duration" lg={3} className="internship-form-label">Duration of Internship :*</Label>
                            <Col className="internship-form-fields">
                                <Control.text model=".duration" id="duration" name="duration" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".duration" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="domain" lg={3} className="internship-form-label">Domain of Internship :*</Label>
                            <Col className="internship-form-fields">
                                <Control.text model=".domain" id="domain" name="domain" className="form-control"
                                    placeholder=""
                                    validators={{
                                        required
                                    }} />
                                <Errors className="text-danger error-message" model=".domain" show="touched"
                                    messages={{
                                        required: '*Required ',
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="stipend" lg={3} className="internship-form-label">Stipend (if paid) :</Label>
                            <Col className="internship-form-fields">
                                <Control.text model=".stipend" id="stipend" name="stipend" className="form-control"
                                    placeholder=""
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlFor="certificateUrl" lg={3} className="internship-form-label">Certificate Url :*</Label>
                            <Col className="internship-form-fields">
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
                        <Row className="submit-button-internship">
                            <Button className="mr10" id="internship-delete-button">Remove</Button>
                            <Button type="submit" id="internship-save-button">Save  <i className="fa fa-arrow-right"></i></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Internship