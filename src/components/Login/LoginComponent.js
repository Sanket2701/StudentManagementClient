import React, { Component } from 'react';
import './LoginComponent.css';
import { Row, Col, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(values) {
        this.props.postLogin(values.email, values.password);
    }

    render() {
        return (
            <div>
                <div id="login-image-container">
                    <img width="100%" src="images\KJSIEIT_Logo.jpg" alt="Logo" id="Logo" />
                </div>
                <div className="container" id="login-main-container">
                    <div className="" id="login-left-container"></div>
                    <div id="login-info-container">
                        <div className="" id="login-middle-container"></div>
                        <div className="" id="login-right-container"></div>
                        <div id="login-text">Student Login</div>
                        <div id="form">
                            <LocalForm model="userLogin" onSubmit={(values) => this.handleLogin(values)}>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text model=".email" id="email" name="email" className="form-control"
                                            placeholder="Email Id"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(50), validEmail
                                            }} />
                                        <Errors className="text-danger" model=".email" show="touched"
                                            messages={{
                                                required: '*Required ',
                                                minLength: '*Must be Greater than 3 charachters ',
                                                maxLength: '*Must be 50 charachters or less ',
                                                validEmail: '*Must be a valid Email '
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group" id="password-row">
                                    {/* <Label htmlFor="email">Email Id</Label> */}
                                    <Col>
                                        <Control.text model=".password" type="password" id="password" name="password" className="form-control"
                                            placeholder="Password"
                                            validators={{
                                                required, minLength: minLength(8), maxLength: maxLength(22)
                                            }} />
                                        <Errors className="text-danger" model=".password" show="touched"
                                            messages={{
                                                required: '*Required',
                                                minLength: '*Must be Greater than 8 charachters',
                                                maxLength: '*Must be 22 charachters or less'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Button type="submit" id="login-button">Login</Button>
                                    <Link to='./forgotpassword' id="forgot-link">Forgot Password?</Link>
                                </Row>
                                <Row className="form-group">
                                    <span> <Link to='/register' id="register-link">Don't have an account? Register Now</Link></span>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login