import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarComponent";
import "./Co-curricularsComponent.css";
import StudentBodyDetailsComponent from "./StudentBodyDetailsComponent";
import StudentProjectCompetitionComponent from "./StudentProjectCompetitionComponent";
import StudentPublicationComponent from "./StudentPublicationComponent";

class CoCurriculars extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div id="co-curriculars-title">
          <h1>Co Curriculars</h1>
        </div>
        <StudentBodyDetailsComponent
          postStudentBodyDetails={this.props.postStudentBodyDetails}
          patchStudentBodyDetails={this.props.patchStudentBodyDetails}
          deleteStudentBodyDetails={this.props.deleteStudentBodyDetails}
        />
        <StudentProjectCompetitionComponent
          postStudentProjectCompetition={
            this.props.postStudentProjectCompetition
          }
          patchStudentProjectCompetition={
            this.props.patchStudentProjectCompetition
          }
          deleteStudentProjectCompetition={
            this.props.deleteStudentProjectCompetition
          }
        />
        <StudentPublicationComponent
          postStudentPublication={this.props.postStudentPublication}
          patchStudentPublication={this.props.patchStudentPublication}
          deleteStudentPublication={this.props.deleteStudentPublication}
        />
      </div>
    );
  }
}

export default CoCurriculars;
