import { createStore, applyMiddleware, combineReducers } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import { RegisterModel } from "./formModel/registerModel";
import { LoginModel } from "./formModel/loginModel";
import { PersonalDetailsModel } from "./formModel/personalDetailsModel";
import { InternshipModel } from "./formModel/internshipModel";
import { AcademicsModel } from "./formModel/academicModel";
import { StudentBodyModel } from "./formModel/studentBodyModel";
import { StudentProjectCompetitionModel } from "./formModel/studentProjectCompetitionModel";
import { StudentPublicationModel } from "./formModel/studentPublicationModel";
import { ExtraCurricularModel } from "./formModel/extraCurricularModel";
import { AttendanceModel } from "./formModel/attendanceModel";
import { ProjectDetailsModel } from "./formModel/projectDetailsModel";
import { OnlineCertificationModel } from "./formModel/onlineCertificationsModel";
import { PointerModel } from "./formModel/pointerModel";
import { PersonalDetailsReducer } from "./Reducers/personalDetailsReducer";
import { InternshipsReducer } from "./Reducers/internshipsReducer";
import { AcademicsReducer } from "./Reducers/academicsReducer";
import { ProjectDetailsReducer } from "./Reducers/projectDetailsReducer";
import { OnlineCertificationsReducer } from "./Reducers/onlineCertificationsReducer";
import { StudentBodyDetailsReducer } from "./Reducers/studentBodyDetailsReducer";
import { StudentProjectCompetitionReducer } from "./Reducers/studentProjectCompetitionReducer";
import { StudentPublicationReducer } from "./Reducers/studentPublicationReducer";
import { ExtraCurricularsReducer } from "./Reducers/extraCurricularsReducer";
import { AttendanceReducer } from "./Reducers/attendanceReducer";
import { ChangePasswordModel } from "./formModel/changePasswordModel";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      personaldetails: PersonalDetailsReducer,
      academics: AcademicsReducer,
      internships: InternshipsReducer,
      projectDetails: ProjectDetailsReducer,
      onlineCertifications: OnlineCertificationsReducer,
      studentBodyDetails: StudentBodyDetailsReducer,
      studentProjectCompetition: StudentProjectCompetitionReducer,
      studentPublication: StudentPublicationReducer,
      extraCurriculars: ExtraCurricularsReducer,
      attendance: AttendanceReducer,
      ...createForms({
        userRegister: RegisterModel,
        userLogin: LoginModel,
        userPersonalDetails: PersonalDetailsModel,
        userAcademics: AcademicsModel,
        userInternships: InternshipModel,
        userProjectDetails: ProjectDetailsModel,
        userOnlineCertification: OnlineCertificationModel,
        userStudentBodyDetails: StudentBodyModel,
        userStudentProjectCompetition: StudentProjectCompetitionModel,
        userStudentPublication: StudentPublicationModel,
        userExtraCurriculars: ExtraCurricularModel,
        userAttendance: AttendanceModel,
        userPointer: PointerModel,
        userChangePassword: ChangePasswordModel,
      }),
    }),
    applyMiddleware(thunk)
  );
  return store;
};
