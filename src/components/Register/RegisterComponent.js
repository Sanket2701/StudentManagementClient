import React, { Component } from 'react';
import './RegisterComponent.css';
import { Row, Col, Button } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);
const validName = (val) => /^[A-Za-z ]+$/i.test(val);

class Register extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(values) {
        this.props.postRegister(values.name, values.email, values.collegeId, values.password, values.passwordConfirm);
    }

    render() {
        return (
            <div>
                <div id="image-container">
                    <img src="images\KJSIEIT_Logo.jpg" alt="Logo" id="Logo" />
                </div>
                <div className="container" id="main-container">
                    <div className="" id="left-container"></div>
                    <div id="info-container">
                        <div className="" id="middle-container"></div>
                        <div className="" id="right-container"></div>
                        <div id="register-text">Register</div>
                        <div id="form">
                            <LocalForm model="userRegister" onSubmit={(values) => this.handleRegister(values)}>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text model=".name" id="name" name="name" className="form-control input-component"
                                            placeholder="Full Name"
                                            validators={{
                                                required, validName
                                            }} />
                                        <Errors className="text-danger error-message" model=".name" show="touched"
                                            messages={{
                                                required: '*Required ',
                                                validName: '*Not a Valid Name'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text model=".email" id="email" name="email" className="form-control input-component"
                                            placeholder="Email Id"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(50), validEmail
                                            }} />
                                        <Errors className="text-danger error-message" model=".email" show="touched"
                                            messages={{
                                                required: '*Required ',
                                                minLength: '*Must be Greater than 3 charachters ',
                                                maxLength: '*Must be 50 charachters or less ',
                                                validEmail: '*Must be a valid Email '
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text model=".collegeId" id="collegeId" name="collegeId" className="form-control input-component"
                                            placeholder="Id Card Number"
                                            validators={{
                                                required, isNumber
                                            }} />
                                        <Errors className="text-danger error-message" model=".collegeId" show="touched"
                                            messages={{
                                                required: '*Required ',
                                                isNumber: '*Must Be a Number ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text model=".password" type="password" id="password" name="password" className="form-control input-component"
                                            placeholder="Password"
                                            validators={{
                                                required, minLength: minLength(8), maxLength: maxLength(25)
                                            }} />
                                        <Errors className="text-danger error-message" model=".password" show="touched"
                                            messages={{
                                                required: '*Required ',
                                                minLength: '*Must be Greater than 8 charachters ',
                                                maxLength: '*Must be 25 charachters or less '
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text model=".passwordConfirm" type="password" id="passwordConfirm" name="passwordConfirm" className="form-control input-component"
                                            placeholder="Confirm Password"
                                            validators={{
                                                required, minLength: minLength(8), maxLength: maxLength(25)
                                            }}
                                        />
                                        <Errors className="text-danger error-message" model=".passwordConfirm" show="touched"
                                            messages={{
                                                required: '*Required ',
                                                minLength: '*Must be Greater than 8 charachters ',
                                                maxLength: '*Must be 25 charachters or less ',
                                            }} />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Button type="submit" id="register-button">Register</Button>
                                </Row>
                                <Row className="form-group">
                                    <Link to='/login' id="login-link">Already have an account? Sign In</Link>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register