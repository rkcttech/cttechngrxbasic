import { Component } from '@angular/core';
import { IOrg, User } from '../Model/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as PatientActions from "../store/patient.actions";
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  addOrg() {
    let newOrg: IOrg = { orgName: "New Org 1", departments: ["Dept 1", "Dept 2", "Dept 3"], location: "Pune" };
    this.store.dispatch(PatientActions.AddOrg({ newOrg }));
  }
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
