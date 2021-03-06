import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./HomeComponent.css";
import {
  Row,
  Col,
  Button,
  Label,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";
import { Loading } from "../LoadingComponent";
import { useHistory } from "react-router-dom";

const required = (val) => val && val.length;

function RenderPersonalDetails({ item, isLoading, isError }) {
  let history = useHistory();
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="personal-details-card" key={item._id}>
        <CardBody>
          <CardTitle className="card-title">Personal Details</CardTitle>
          <CardText>
            <Row>
              <Col>
                {item.firstname} {item.lastname}
              </Col>
            </Row>
            <Row>
              <Col>ID-Card Number: {item.collegeId}</Col>
            </Row>
            <Row>
              <Col>Contact Number: {item.contact} </Col>
            </Row>
          </CardText>
          <Button
            className="card-button"
            onClick={() => {
              history.push("/personaldetails", {
                ...item,
                fromDashBoard: true,
              });
            }}
          >
            See All Personal Details
          </Button>
        </CardBody>
      </Card>
    );
}

function RenderAcademics({ item, isLoading, isError }) {
  let history = useHistory();
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="academics-card" key={item._id}>
        <CardBody>
          <CardTitle className="card-title">Academics</CardTitle>
          <CardText>
            <Row>
              <Col lg={4}>Semester: {item.currentSemester}</Col>
              <Col>Department: {item.department}</Col>
            </Row>
            <Row>
              <Col>Programming Skills: {item.programmingLanguages}</Col>
            </Row>
          </CardText>
          <Button
            className="card-button"
            onClick={() => {
              history.push("/academics", { ...item, fromDashBoard: true });
            }}
          >
            See All Academics
          </Button>
        </CardBody>
      </Card>
    );
}
function RenderPointers({ item }) {
  let answer = [];
  if (item.cgpi) {
    for (let i = 0; i < item.cgpi.length; i += 1) {
      answer[item.cgpi[i].semester] = item.cgpi[i].gpa;
    }
  }
  return (
    <div id="gpa-section">
      <Row>
        <Col className="gpa-box" id="sem-1">
          {answer[1]}
        </Col>
        <Col className="gpa-box" id="sem-2">
          {answer[2]}
        </Col>
        <Col className="gpa-box" id="sem-3">
          {answer[3]}
        </Col>
        <Col className="gpa-box" id="sem-4">
          {answer[4]}
        </Col>
        <Col className="gpa-box" id="sem-5">
          {answer[5]}
        </Col>
        <Col className="gpa-box" id="sem-6">
          {answer[6]}
        </Col>
        <Col className="gpa-box" id="sem-7">
          {answer[7]}
        </Col>
        <Col className="gpa-box" id="sem-8">
          {answer[8]}
        </Col>
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

function RenderInternships({ item, isLoading, isError }) {
  let history = useHistory();
  const internshipList = item.map((i) => {
    return (
      <div>
        <Row className="row-padding" key={i._key}>
          <Col lg={6}>{i.companyName}</Col>
          <Col lg={4}>{i.duration}</Col>
          <Button
            lg={2}
            className="arrow-button"
            onClick={() => {
              history.push("/internships", { ...i, fromDashBoard: true });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="internship-card">
        <CardBody>
          <CardTitle className="card-title">Internships</CardTitle>
          <div className="cards-body">{internshipList}</div>
        </CardBody>
      </Card>
    );
}

function RenderProjectDetails({ item, isLoading, isError }) {
  let history = useHistory();
  const projectDetailsList = item.map((i) => {
    return (
      <div key={i._id}>
        <Row className="row-padding">
          <Col>Title: {i.title}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={10}>
            {`${i.from}`.substring(0, 10)}-{`${i.to}`.substring(0, 10)}
          </Col>
          <Button
            className="arrow-button"
            onClick={() => {
              history.push("/projectdetails", { ...i, fromDashBoard: true });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <Row className="row-padding">
          <Col>Skills Developed: {i.skillsDeveloped}</Col>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="project-details-card">
        <CardBody className="card-body">
          <CardTitle className="card-title">Project Details</CardTitle>
          <div className="cards-body">{projectDetailsList}</div>
        </CardBody>
      </Card>
    );
}

function RenderOnlineCertifications({ item, isLoading, isError }) {
  let history = useHistory();
  const onlineCertificationsList = item.map((i) => {
    return (
      <div key={i._id}>
        <Row className="row-padding">
          <Col>Title: {i.title}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={10}>Platform: {i.platform}</Col>
          <Button
            className="arrow-button"
            onClick={() => {
              history.push("/onlinecertifications", {
                ...i,
                fromDashBoard: true,
              });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <Row className="row-padding">
          <Col>
            {`${i.from}`.substring(0, 10)}-{`${i.to}`.substring(0, 10)}
          </Col>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="online-certifications-card">
        <CardBody className="">
          <CardTitle className="card-title">Online Certifications</CardTitle>
          <div className="cards-body">{onlineCertificationsList}</div>
        </CardBody>
      </Card>
    );
}

function RenderAttendance({ item, isLoading, isError }) {
  let history = useHistory();
  const attendanceList = item.map((i) => {
    let avg = (i.theoryAttendance + i.praticalAttendance) / 2;
    return (
      <div>
        <Row className="row-padding">
          <Col>Semester: {i.semester}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={10}>Average: {avg}</Col>
          <Button
            lg={2}
            className="arrow-button"
            onClick={() => {
              history.push("/attendance", { ...i, fromDashBoard: true });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="attendance-card">
        <CardBody className="">
          <CardTitle className="card-title">Attendance</CardTitle>
          <div className="cards-body">{attendanceList}</div>
        </CardBody>
      </Card>
    );
}

function RenderStudentBodyDetails({ item, isLoading, isError }) {
  let history = useHistory();
  const studentBodyDetailsList = item.map((i) => {
    return (
      <div key={i._id}>
        <Row className="row-padding">
          <Col>Academic Year: {i.studentBodyYear}</Col>
        </Row>
        <Row className="row-padding">
          <Col>Committee: {i.name}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={10}>Position: {i.post}</Col>
          <Button
            className="arrow-button"
            onClick={() => {
              history.push("/co-curriculars", {
                ...i,
                fromDashBoard: true,
                fromStudentBody: true,
              });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="student-body-details-card">
        <CardBody className="">
          <CardTitle className="card-title">Student Body Details</CardTitle>
          <div className="cards-body">{studentBodyDetailsList}</div>
        </CardBody>
      </Card>
    );
}

function RenderProjectCompetitionDetails({ item, isLoading, isError }) {
  let history = useHistory();
  const projectCompetitionDetailsList = item.map((i) => {
    return (
      <div key={i._id}>
        <Row className="row-padding">
          <Col>Academic Year: {i.studentProjectYear}</Col>
        </Row>
        <Row className="row-padding">
          <Col>Competition Name: {i.competitionName}</Col>
        </Row>
        <Row className="row-padding">
          <Col>Title: {i.projectTitle}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={10}>Role: {i.role}</Col>
          <Button
            className="arrow-button"
            onClick={() => {
              history.push("/co-curriculars", {
                ...i,
                fromDashBoard: true,
                fromProjectCompetition: true,
              });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="project-competition-details-card">
        <CardBody className="">
          <CardTitle className="card-title">
            Project Competition Details
          </CardTitle>
          <div className="cards-body">{projectCompetitionDetailsList}</div>
        </CardBody>
      </Card>
    );
}

function RenderStudentPublications({ item, isLoading, isError }) {
  let history = useHistory();
  const studentPublicationsList = item.map((i) => {
    return (
      <div key={i._id}>
        <Row className="row-padding">
          <Col>Title: {i.title}</Col>
          <Col>Academic Year: {i.studentPublicationYear}</Col>
        </Row>
        <Row className="row-padding">
          <Col>ISBN/E-ISSN: {i.ISBN}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={5}>Paper Type: {i.paperType}</Col>
          <Col lg={5}>Paper Level: {i.paperLevel}</Col>
          <Button
            lg={2}
            className="arrow-button"
            onClick={() => {
              history.push("/co-curriculars", {
                ...i,
                fromDashBoard: true,
                fromStudentPublication: true,
              });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="student-publications-card">
        <CardBody className="">
          <CardTitle className="card-title">Student Publications</CardTitle>
          <div className="cards-body">{studentPublicationsList}</div>
        </CardBody>
      </Card>
    );
}

function RenderExtraCurriculars({ item, isLoading, isError }) {
  let history = useHistory();
  const extraCurricularsList = item.map((i) => {
    return (
      <div>
        <Row className="row-padding">
          <Col lg={5}>Semester: {i.semester}</Col>
          <Col lg={5}>Activity: {i.activity}</Col>
        </Row>
        <Row className="row-padding">
          <Col lg={10}>Level of Activity: {i.levelActivity}</Col>
          <Button
            lg={2}
            className="arrow-button"
            onClick={() => {
              history.push("/extra-curriculars", { ...i, fromDashBoard: true });
            }}
          >
            <i class="fa fa-arrow-circle-right fa-lg"></i>
          </Button>
        </Row>
        <hr />
      </div>
    );
  });
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <h4>{isError}</h4>;
  } else
    return (
      <Card id="extra-curriculars-card">
        <CardBody className="">
          <CardTitle className="card-title">Extra Curriculars</CardTitle>
          <div className="cards-body">{extraCurricularsList}</div>
        </CardBody>
      </Card>
    );
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handlePointers = this.handlePointers.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handlePointers(values) {
    this.props.postPointers(values.semester, values.gpa, values.certificateUrl);
  }
  componentDidMount() {
    console.log(this.props.academic);
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div className="home-page">
          <div className="photo-box">
            <img
              src="https://storage.googleapis.com/studentinformation-48618.appspot.com/profile.png"
              alt="Profile"
              id="photo"
            />
          </div>
          <div className="">
            <Button id="change-photo-button">Change Photo</Button>
          </div>
          <br />
          <Row>
            <Col>
              <RenderPersonalDetails
                item={this.props.personaldetail}
                isLoading={this.props.isPersonalDetailLoading}
                isError={this.props.isPersonalDetailError}
              />
            </Col>
            <Col>
              <RenderAcademics
                item={this.props.academic}
                isLoading={this.props.isAcademicLoading}
                isError={this.props.isAcademicError}
              />
            </Col>
          </Row>
          <br />
          <br />
          <div className="progress-label-and-button">
            <Label id="progress-label">Progress:</Label>
            <Button onClick={this.toggleModal} id="add-gpa-button">
              Add GPA <i class="fa fa-plus"></i>
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Add GPA</ModalHeader>
              <ModalBody>
                <Form
                  model="userPointer"
                  onSubmit={(values) => this.handlePointers(values)}
                >
                  <Row className="form-group">
                    <Label lg={3} className="modal-label">
                      Semester:*
                    </Label>
                    <Col lg={9}>
                      <Control.select
                        model=".semester"
                        id="semester"
                        name="semester"
                        className="form-control"
                        placeholder=""
                        validators={{
                          required,
                        }}
                      >
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
                      <Errors
                        className="text-danger error-message"
                        model=".semester"
                        show="touched"
                        messages={{
                          required: "*Required ",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label lg={3} className="modal-label">
                      GPA:*
                    </Label>
                    <Col lg={9}>
                      <Control.text
                        model=".gpa"
                        id="gpa"
                        name="gpa"
                        className="form-control"
                        placeholder="GPA"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger error-message"
                        model=".gpa"
                        show="touched"
                        messages={{
                          required: "*Required ",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label lg={3} className="modal-label">
                      URL:*
                    </Label>
                    <Col lg={9}>
                      <Control.text
                        model=".certificateUrl"
                        type="url"
                        id="certificateUrl"
                        name="certificateUrl"
                        className="form-control"
                        placeholder="URL"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger error-message"
                        model=".certificateUrl"
                        show="touched"
                        messages={{
                          required: "*Required ",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group save-row">
                    <Button type="submit" id="submit-gpa">
                      Save <i class="fa fa-check"></i>
                    </Button>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
          </div>
          <RenderPointers item={this.props.academic} />
          <br />
          <br />
          <div>
            <Row>
              <Col>
                <RenderInternships
                  item={this.props.internship}
                  isLoading={this.props.isInternshipLoading}
                  isError={this.props.isInternshipError}
                />
              </Col>
              <Col>
                <RenderProjectDetails
                  item={this.props.projectdetail}
                  isLoading={this.props.isProjectDetailLoading}
                  isError={this.props.isProjectDetailError}
                />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col lg={7}>
                <RenderOnlineCertifications
                  item={this.props.onlinecertification}
                  isLoading={this.props.isOnlineCertificationLoading}
                  isError={this.props.isOnlineCertificationError}
                />
              </Col>
              <Col lg={5}>
                <RenderAttendance
                  item={this.props.studentAttendance}
                  isLoading={this.props.isAttendanceLoading}
                  isError={this.props.isAttendanceError}
                />
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div>
            <h1 className="co-curriculars-title">Co-Curriculars</h1>
            <br />
            <Row>
              <Col>
                <RenderStudentBodyDetails
                  item={this.props.studentBodyDetail}
                  isLoading={this.props.isStudentBodyDetailLoading}
                  isError={this.props.isStudentBodyDetailError}
                />
              </Col>
              <Col>
                <RenderProjectCompetitionDetails
                  item={this.props.projectCompetition}
                  isLoading={this.props.isStudentProjectCompetitionLoading}
                  isError={this.props.isStudentProjectCompetitionError}
                />
              </Col>
            </Row>
            <br />
            <br />
            <RenderStudentPublications
              item={this.props.publication}
              isLoading={this.props.isStudentPublicationLoading}
              isError={this.props.isStudentPublicationError}
            />
          </div>
          <br />
          <br />
          <RenderExtraCurriculars
            item={this.props.extraCurricular}
            isLoading={this.props.isExtraCurricularsLoading}
            isError={this.props.isExtraCurricularsError}
          />
        </div>
      </div>
    );
  }
}

export default Home;
