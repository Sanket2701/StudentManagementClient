import React, { Component } from 'react';
import Sidebar from '../Sidebar/SidebarComponent';
import './Co-curricularsComponent.css';
import StudentBodyDetailsComponent from './StudentBodyDetailsComponent';
import StudentProjectCompetitionComponent from './StudentProjectCompetitionComponent';
import StudentPublicationComponent from './StudentPublicationComponent';

class CoCurriculars extends Component {

    render() {
        return (
            <div>
                <Sidebar />
                <div id="co-curriculars-title"><h1>Co Curriculars</h1></div>
                <StudentBodyDetailsComponent postStudentBodyDetails={this.props.postStudentBodyDetails} />
                <StudentProjectCompetitionComponent postStudentProjectCompetition={this.props.postStudentProjectCompetition} />
                <StudentPublicationComponent postStudentPublication={this.props.postStudentPublication} />
            </div>
        );
    }
}

export default CoCurriculars;