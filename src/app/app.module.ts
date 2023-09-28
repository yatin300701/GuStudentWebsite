import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/landing-page/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PastYearPapersComponent } from './components/landing-page/past-year-papers/past-year-papers.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RactangleCardComponent } from './commonComponents/ractangle-card/ractangle-card.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';



const initalise = {
  apiKey: "AIzaSyBvXim3Hms59KfC-2fhNEauRQ3wqd_rQ5M",
    authDomain: "gurugramuniversity-ffef9.firebaseapp.com",
    projectId: "gurugramuniversity-ffef9",
    storageBucket: "gurugramuniversity-ffef9.appspot.com",
    messagingSenderId: "321996288034",
    appId: "1:321996288034:web:fa2c479e5e13f56fd05a7b",
    measurementId: "G-DFZYQVPRT3"
}
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    PastYearPapersComponent,
    RactangleCardComponent,
    SignInComponentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    PdfViewerModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
