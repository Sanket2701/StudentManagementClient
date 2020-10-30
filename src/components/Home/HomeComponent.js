import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './HomeComponent.css';
import { Row, Col, Button, Label, Card, CardBody, CardTitle, CardText, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from '../LoadingComponent';

const required = (val) => val && val.length;
const internshipData = [
    { company: "RBT Enterprises", duration: "3 months" },
    { company: "RBT Enterprises", duration: "3 months" },
    { company: "RBT Enterprises", duration: "3 months" },
    { company: "RBT Enterprises", duration: "3 months" },
    { company: "RBT Enterprises", duration: "3 months" },

];
const projectDetailsData = [
    { title: "Title of Project", from: "dd/mm/yyyy", to: "dd/mm/yyyy", skills: "Javascript, html, css" },
    { title: "Title of Project", from: "dd/mm/yyyy", to: "dd/mm/yyyy", skills: "Javascript, html, css" },
    { title: "Title of Project", from: "dd/mm/yyyy", to: "dd/mm/yyyy", skills: "Javascript, html, css" },
    { title: "Title of Project", from: "dd/mm/yyyy", to: "dd/mm/yyyy", skills: "Javascript, html, css" },
];
const onlineCertificationsData = [
    { title: "Title of course", from: "dd/mm/yyyy", to: "dd/mm/yyyy", platform: "Coursera, udemy, nptel" },
    { title: "Title of course", from: "dd/mm/yyyy", to: "dd/mm/yyyy", platform: "Coursera, udemy, nptel" },
    { title: "Title of course", from: "dd/mm/yyyy", to: "dd/mm/yyyy", platform: "Coursera, udemy, nptel" },
    { title: "Title of course", from: "dd/mm/yyyy", to: "dd/mm/yyyy", platform: "Coursera, udemy, nptel" },
    { title: "Title of course", from: "dd/mm/yyyy", to: "dd/mm/yyyy", platform: "Coursera, udemy, nptel" },
]
const attendanceData = [
    { sem: 1, avg: "100%" },
    { sem: 2, avg: "100%" },
    { sem: 3, avg: "100%" },
    { sem: 4, avg: "100%" },
    { sem: 5, avg: "100%" },
    { sem: 6, avg: "100%" },
]
const studentBodyDetailsData = [
    { year: "2020-2021", committee: "CSI", position: "chairperson" },
    { year: "2021-2022", committee: "ACS", position: "chairperson" },
]
const projectCompetitionDetailsData = [
    { year: "2021-2022", competition: "Deep Blue", title: "ASST", role: "web developer" },
    { year: "2021-2022", competition: "Deep Blue", title: "ASST", role: "web developer" },
    { year: "2021-2022", competition: "Deep Blue", title: "ASST", role: "web developer" },
    { year: "2021-2022", competition: "Deep Blue", title: "ASST", role: "web developer" },

]
const studentPublicationsData = [
    { year: "2021-2022", paperlevel: "international", title: "technical paper of the year", papertype: "journal", isbn: "sihydVils" },
    { year: "2021-2022", paperlevel: "international", title: "technical paper of the year", papertype: "journal", isbn: "sihydVils" },
    { year: "2021-2022", paperlevel: "international", title: "technical paper of the year", papertype: "journal", isbn: "sihydVils" },
]
const extraCurricularsData = [
    { semester: 4, activity: "table tennis", level: "national" },
    { semester: 4, activity: "table tennis", level: "national" },
    { semester: 4, activity: "table tennis", level: "national" },
]
function RenderPersonalDetails({ item, isLoading, isError }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (isError) {
        return (
            <h4>{isError}</h4>
        );
    }
    else return (
        <Card id="personal-details-card">
            <CardBody>
                <CardTitle className="card-title">Personal Details</CardTitle>
                <CardText>
                    <Row>
                        <Col>{item.firstname} {item.lastname}</Col>
                    </Row>
                    <Row>
                        <Col>ID-Card Number: {item.collegeId}</Col>
                    </Row>
                    <Row>
                        <Col>Contact Number: {item.contact} </Col>
                    </Row>
                </CardText>
                <Button className="card-button">See All Personal Details</Button>
            </CardBody>
        </Card>
    )
}

function RenderAcademics() {
    return (
        <Card id="academics-card">
            <CardBody>
                <CardTitle className="card-title">Academics</CardTitle>
                <CardText>
                    <Row>
                        <Col lg={4}>Semester: 5</Col>
                        <Col>Computer Engineering</Col>
                    </Row>
                    <Row>
                        <Col>Programming Skills: Python, Javasript, Html, Css, Java</Col>
                    </Row>
                </CardText>
                <Button className="card-button">See All Academics</Button>
            </CardBody>
        </Card>
    )
}

function RenderPointers() {
    return (
        <div id="gpa-section">
            <Row>
                <Col className="gpa-box" id="sem-1">7.8</Col>
                <Col className="gpa-box" id="sem-2">7.8</Col>
                <Col className="gpa-box" id="sem-3">7.8</Col>
                <Col className="gpa-box" id="sem-4">7.8</Col>
                <Col className="gpa-box" id="sem-5">7.8</Col>
                <Col className="gpa-box" id="sem-6">7.8</Col>
                <Col className="gpa-box" id="sem-7">7.8</Col>
                <Col className="gpa-box" id="sem-8">7.8</Col>
            </Row>
            <Row>
                <Col>Sem 1</Col>
                <Col>Sem 2</Col>
                <Col>Sem 3</Col>
                <Col>Sem 4</Col>
                <Col>Sem 5</Col>
                <Col>Sem 6</Col>
                <Col>Sem 7</Col>
                <Col>Sem 8</Col>
            </Row>
        </div>
    );
}

function RenderInternships() {
    const internshipList = internshipData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col lg={6}>{user.company}</Col>
                    <Col lg={4}>{user.duration}</Col>
                    <Button lg={2} className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="internship-card">
            <CardBody>
                <CardTitle className="card-title">Internships</CardTitle>
                <div className="cards-body">
                    {internshipList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderProjectDetails() {
    const projectDetailsList = projectDetailsData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col>{user.title}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={10}>{user.from}-{user.to}</Col>
                    <Button className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <Row className="row-padding">
                    <Col>Skills Developed: {user.skills}</Col>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="project-details-card">
            <CardBody className="card-body">
                <CardTitle className="card-title">Project Details</CardTitle>
                <div className="cards-body">
                    {projectDetailsList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderOnlineCertifications() {
    const onlineCertificationsList = onlineCertificationsData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col>{user.title}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={10}>Platform: {user.platform}</Col>
                    <Button className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <Row className="row-padding">
                    <Col>{user.from}-{user.to}</Col>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="online-certifications-card">
            <CardBody className="">
                <CardTitle className="card-title">Online Certifications</CardTitle>
                <div className="cards-body">
                    {onlineCertificationsList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderAttendance() {
    const attendanceList = attendanceData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col>Semester: {user.sem}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={10}>Average: {user.avg}</Col>
                    <Button lg={2} className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="attendance-card">
            <CardBody className="">
                <CardTitle className="card-title">Attendance</CardTitle>
                <div className="cards-body">
                    {attendanceList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderStudentBodyDetails() {
    const studentBodyDetailsList = studentBodyDetailsData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col>Academic Year: {user.year}</Col>
                </Row>
                <Row className="row-padding">
                    <Col>Committee: {user.committee}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={10}>Position: {user.position}</Col>
                    <Button className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="student-body-details-card">
            <CardBody className="">
                <CardTitle className="card-title">Student Body Details</CardTitle>
                <div className="cards-body">
                    {studentBodyDetailsList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderProjectCompetitionDetails() {
    const projectCompetitionDetailsList = projectCompetitionDetailsData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col>Academic Year: {user.year}</Col>
                </Row>
                <Row className="row-padding">
                    <Col>Competition Name: {user.competition}</Col>
                </Row>
                <Row className="row-padding">
                    <Col>Title: {user.title}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={10}>Role: {user.role}</Col>
                    <Button className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="project-competition-details-card">
            <CardBody className="">
                <CardTitle className="card-title">Project Competition Details</CardTitle>
                <div className="cards-body">
                    {projectCompetitionDetailsList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderStudentPublications() {
    const studentPublicationsList = studentPublicationsData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col>Title: {user.title}</Col>
                    <Col>Academic Year: {user.year}</Col>
                </Row>
                <Row className="row-padding">
                    <Col>ISBN/E-ISSN: {user.isbn}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={5}>Paper Type: {user.papertype}</Col>
                    <Col lg={5}>Paper Level: {user.paperlevel}</Col>
                    <Button lg={2} className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="student-publications-card">
            <CardBody className="">
                <CardTitle className="card-title">Student Publications</CardTitle>
                <div className="cards-body">
                    {studentPublicationsList}
                </div>
            </CardBody>
        </Card>
    );
}

function RenderExtraCurriculars() {
    const extraCurricularsList = extraCurricularsData.map((user) => {
        return (
            <div>
                <Row className="row-padding">
                    <Col lg={5}>Semester: {user.semester}</Col>
                    <Col lg={5}>Activity: {user.activity}</Col>
                </Row>
                <Row className="row-padding">
                    <Col lg={10}>Level: {user.level}</Col>
                    <Button lg={2} className="arrow-button"><i class="fa fa-arrow-circle-right fa-lg"></i></Button>
                </Row>
                <hr />
            </div>
        );
    });
    return (
        <Card id="extra-curriculars-card">
            <CardBody className="">
                <CardTitle className="card-title">Extra Curriculars</CardTitle>
                <div className="cards-body">
                    {extraCurricularsList}
                </div>
            </CardBody>
        </Card>
    );
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div className="home-page">
                    <div className="photo-box">
                        <img src="" alt="Profile" id="photo" />
                    </div>
                    <div className="">
                        <Button id="change-photo-button">Change Photo</Button>
                    </div>
                    <br />
                    <Row>
                        <Col><RenderPersonalDetails item={this.props.personaldetail}
                            isLoading={this.props.isLoading}
                            isError={this.props.isError} /></Col>
                        <Col><RenderAcademics /></Col>
                    </Row>
                    <br /><br />
                    <div className="progress-label-and-button">
                        <Label id="progress-label">Progress:</Label>
                        <Button onClick={this.toggleModal} id="add-gpa-button">Add GPA <i class="fa fa-plus"></i></Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Add GPA</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label lg={3} className="modal-label">Semester:*</Label>
                                        <Col lg={9}>
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
                                    <Row className="form-group">
                                        <Label lg={3} className="modal-label">GPA:*</Label>
                                        <Col lg={9}>
                                            <Control.text model=".gpa" id="gpa" name="gpa" className="form-control"
                                                placeholder="GPA"
                                                validators={{
                                                    required
                                                }} />
                                            <Errors className="text-danger error-message" model=".gpa" show="touched"
                                                messages={{
                                                    required: '*Required ',
                                                }} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label lg={3} className="modal-label">URL:*</Label>
                                        <Col lg={9}>
                                            <Control.text model=".url" id="url" name="url" className="form-control"
                                                placeholder="URL"
                                                validators={{
                                                    required
                                                }} />
                                            <Errors className="text-danger error-message" model=".url" show="touched"
                                                messages={{
                                                    required: '*Required ',
                                                }} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group save-row">
                                        <Button type="submit" id="submit-gpa">Save <i class="fa fa-check"></i></Button>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                    <RenderPointers />
                    <br />
                    <br />
                    <div>
                        <Row>
                            <Col><RenderInternships /></Col>
                            <Col><RenderProjectDetails /></Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col lg={7}><RenderOnlineCertifications /></Col>
                            <Col lg={5}><RenderAttendance /></Col>
                        </Row>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1 className="co-curriculars-title">Co-Curriculars</h1>
                        <br />
                        <Row>
                            <Col><RenderStudentBodyDetails /></Col>
                            <Col><RenderProjectCompetitionDetails /></Col>
                        </Row>
                        <br /><br />
                        <RenderStudentPublications />
                    </div>
                    <br />
                    <br />
                    <RenderExtraCurriculars />
                </div>
            </div>
        );
    }
}

export default Home;