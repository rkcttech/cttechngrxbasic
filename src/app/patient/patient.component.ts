import { Component } from '@angular/core';
import { User } from '../Model/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as PatientActions from "../store/patient.actions";
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  loggedInUser$: Observable<User>;
  constructor(private store: Store<{ loggedInUser: User }>) {
    this.loggedInUser$ = store.select('loggedInUser');
  }

  registerUser() {
    this.store.dispatch(PatientActions.register());
  }
  signInUser() {
    this.store.dispatch(PatientActions.signin());
  }
  logoutUser() {
    this.store.dispatch(PatientActions.logout());
  }
}
