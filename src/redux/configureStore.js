import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { RegisterModel } from './formModel/registerModel';
import { LoginModel } from './formModel/loginModel';
import { PersonalDetailsModel } from './formModel/personalDetailsModel';
import { InternshipModel } from './formModel/internshipModel';
import { AcademicsModel } from './formModel/academicModel';
import { StudentBodyModel } from './formModel/studentBodyModel';
import { StudentProjectCompetitionModel } from './formModel/studentProjectCompetitionModel';
import { StudentPublicationModel } from './formModel/studentPublicationModel';
import { ExtraCurricularModel } from './formModel/extraCurricularModel';
import { AttendanceModel } from './formModel/attendanceModel';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                userRegister: RegisterModel,
                userLogin: LoginModel,
                userPersonalDetails: PersonalDetailsModel,
                userAcademics: AcademicsModel,
                userInternships: InternshipModel,
                userStudentBodyDetails: StudentBodyModel,
                userStudentProjectCompetition: StudentProjectCompetitionModel,
                userStudentPublication: StudentPublicationModel,
                userExtraCurriculars: ExtraCurricularModel,
                userAttendance: AttendanceModel
            }),
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}