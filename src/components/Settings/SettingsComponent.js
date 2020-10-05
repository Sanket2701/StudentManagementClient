import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './SettingsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);


class Settings extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="setting-title"><h1>Settings</h1></div>
                <div className="single-setting-form">
                    <LocalForm>
                        <Row className="form-group">
                            <Label htmlFor="old_passsword" lg={3} className="setting-form-label">Old Password :*</Label>
                            <Col className="setting-form-fields">
                                <Control.text model=".old_password" type="password" id="old_password" name="old_password" className="form-control"
                                    placeholder="Password"
                                    validators={{
                                        required, minLength: minLength(8), maxLength: maxLength(22)
                                    }} />
                                <Errors className="text-danger" model=".old_password" show="touched"
                                    messages={{
                                        required: '*Required',
                                        minLength: '*Must be Greater than 8 charachters',
                                        maxLength: '*Must be 22 charachters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="new_passsword" lg={3} className="setting-form-label">New Password :*</Label>
                            <Col className="setting-form-fields">
                                <Control.text model=".new_password" type="password" id="new_password" name="new_password" className="form-control"
                                    placeholder="Password"
                                    validators={{
                                        required, minLength: minLength(8), maxLength: maxLength(22)
                                    }} />
                                <Errors className="text-danger" model=".new_password" show="touched"
                                    messages={{
                                        required: '*Required',
                                        minLength: '*Must be Greater than 8 charachters',
                                        maxLength: '*Must be 22 charachters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="confirm_passsword" lg={3} className="setting-form-label">Confirm Password :*</Label>
                            <Col className="setting-form-fields">
                                <Control.text model=".confirm_password" type="password" id="confirm_password" name="confirm_password" className="form-control"
                                    placeholder="Password"
                                    validators={{
                                        required, minLength: minLength(8), maxLength: maxLength(22)
                                    }} />
                                <Errors className="text-danger" model=".confirm_password" show="touched"
                                    messages={{
                                        required: '*Required',
                                        minLength: '*Must be Greater than 8 charachters',
                                        maxLength: '*Must be 22 charachters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="submit-button-setting">
                            <Button type="submit" id="setting-save-button">Save  <i class="fa fa-arrow-right"></i></Button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default Settings;