import React, { Component, useState } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './Extra-curricularsComponent.css';
import { Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => !(val) || (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[s][o][m][a][i][y][a]+\.[e][d][u]$/i.test(val);
// const validName = (val) => /^[A-Za-z ]+$/i.test(val);

export function ExtraCurricularList() {
    const [inputList, setInputList] = useState([{
        extracurricular_done_during_semester: "", extracurricular_activity: "", extracurricular_level_of_activity: "",
        extracurricular_position: ""
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
            extracurricular_done_during_semester: "", extracurricular_activity: "", extracurricular_level_of_activity: "",
            extracurricular_position: ""
        }]);

    };

    const handleSave = () => {
        window.location.reload(true);
    }
    return (
        <div>
            <Sidebar />
            <div id="extracurricular-title"><h1>Extra-Curriculars</h1>
                <svg aria-hidden="true" onClick={handleAddClick} focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14 plus-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
            </div>
            <div className="all-extracurriculars">
                {inputList.map((x, i) => {
                    return (
                        <div className="single-extracurricular-form xyz">
                            <LocalForm className="extracurricular-form">
                                <Row>
                                    <Label htmlFor="extracurricular_done_during_semester" lg={3} className="extracurricular-form-label">Done During Semester :*</Label>
                                    <Col className="extracurricular-form-fields">
                                        <Control.select model=".extracurricular_done_during_semester" id="extracurricular_done_during_semester" name="extracurricular_done_during_semester" className="form-control"
                                            placeholder=""
                                            value={x.extracurricular_done_during_semester}
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
                                        <Errors className="text-danger error-message" model=".extracurricular_done_during_semester" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="extracurricular_activity" lg={3} className="extracurricular-form-label">Activity :*</Label>
                                    <Col className="extracurricular-form-fields">
                                        <Control.text model=".extracurricular_activity" id="extracurricular_activity" name="extracurricular_activity" className="form-control"
                                            placeholder=""
                                            value={x.extracurricural_companyname}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".extracurricular_activity" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="extracurricular_level_of_activity" lg={3} className="extracurricular-form-label">Level of Activity :*</Label>
                                    <Col className="extracurricular-form-fields">
                                        <Control.text model=".extracurricular_level_of_activity" id="extracurricular_level_of_activity" name="extracurricular_level_of_activity" className="form-control"
                                            placeholder=""
                                            value={x.extracurricular_level_of_activity}
                                            onChange={e => handleInputChange(e, i)}
                                            validators={{
                                                required
                                            }} />
                                        <Errors className="text-danger error-message" model=".extracurricular_level_of_activity" show="touched"
                                            messages={{
                                                required: '*Required ',
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="extracurricular_position" lg={3} className="extracurricular-form-label">Position (if required) :</Label>
                                    <Col className="extracurricular-form-fields">
                                        <Control.text model=".extracurricular_position" id="extracurricular_position" name="extracurricular_position" className="form-control"
                                            placeholder=""
                                            value={x.extracurricular_position}
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                    </Col>
                                </Row>
                                <Row className="submit-button-extracurricular">
                                    <Button
                                        className="mr10" id="extracurricular-delete-button"
                                        onClick={() => handleRemoveClick(i)}>Remove</Button>
                                    <Button type="submit" id="extracurricular-save-button"
                                        onClick={handleSave}
                                    >Save  <i className="fa fa-arrow-right"></i></Button>
                                </Row>
                            </LocalForm>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

class ExtraCurriculars extends Component {
    render() {
        return (
            <div>
                <ExtraCurricularList />
            </div>
        );
    }
}

export default ExtraCurriculars;