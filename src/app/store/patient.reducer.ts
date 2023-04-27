import { createReducer, on } from "@ngrx/store";
import * as PatientActions from "./patient.actions";
import { User } from "../Model/user.model";

//export const initialState = {};
export const initialState: User = {
    id: '0',
    session: '',
    Orgs: {
        orgName: 'Wilco',
        location: 'NY',
        departments: ['oncology', 'pediatrics']
    }
};

export const patientReducer = createReducer(
    initialState,
    on(PatientActions.logout, state =>({...state, id: '-1'})),
    on(PatientActions.signin, state =>({...state, session: '1' })),
    on(PatientActions.register, state =>({...state, session : '2' })),
 );