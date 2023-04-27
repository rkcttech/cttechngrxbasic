import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { StoreModule } from '@ngrx/store';
import { patientReducer } from './store/patient.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ loggedInUser: patientReducer  })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
