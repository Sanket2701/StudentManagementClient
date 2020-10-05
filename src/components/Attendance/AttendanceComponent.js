import React, { Component, useState } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './AttendanceComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => !(val) || (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);
// const validName = (val) => /^[A-Za-z ]+$/i.test(val);

export function AttendanceList() {
    const [inputList, setInputList] = useState([{
        attendance_semester: "", attendance_theory: "", attendance_practical: "",
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
            attendance_semester: "", attendance_theory: "", attendance_practical: "",
        }]);

    };
    return (
        <div>
            <Sidebar />
            <div id="attendance-title"><h1>Attendance</h1>
                <svg aria-hidden="true" onClick={handleAddClick} focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14 plus-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
            </div>
            <div className="all-attendances">
                {inputList.map((x, i) => {
                    return (
                        <div className="single-attendance-form xyz">
                            <LocalForm className="attendance-form">
                                <Row>
                                    <Label htmlFor="attendance_semester" lg={3} className="attendance-form-label">Semester :*</Label>
                                    <Col className="attendance-form-fields">
                                        <Control.select model=".attendance_semester" id="attendance_semester" name="attendance_semester" className="form-control"
                                            placeholder=""
                                            value={x.attendance_semester}
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
                                        <Errors className="text-danger error-message" model=".attendance_semester" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="attendance_theory" lg={3} className="attendance-form-label">Theory Attendance :*</Label>
                                    <Col className="attendance-form-fields">
                                        <Control.text model=".attendance_theory" id="attendance_theory" name="attendance_theory" className="form-control"
                                            placeholder=""
                                            value={x.attendance_companyname}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".attendance_theory" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                        {/* <FormFeedback>{errors.internship_companyname}</FormFeedback>   */}
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="attendance_practical" lg={3} className="attendance-form-label">Practical Attendance :*</Label>
                                    <Col className="attendance-form-fields">
                                        <Control.text model=".attendance_practical" id="attendance_practical" name="attendance_practical" className="form-control"
                                            placeholder=""
                                            value={x.attendance_duration}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".attendance_practical" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="submit-button-attendance">
                                    <Button
                                        className="mr10" id="attendance-delete-button"
                                        onClick={() => handleRemoveClick(i)}>Remove</Button>
                                    <Button type="submit" id="attendance-save-button">Save  <i className="fa fa-arrow-right"></i></Button>
                                </Row>
                            </LocalForm>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

class Attendance extends Component {
    render() {
        return (
            <div>
                <AttendanceList />
            </div>
        );
    }
}

export default Attendance;