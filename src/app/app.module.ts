import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MyJobsComponent,
    JobsComponent,
    JobListingComponent,
    JobDetailsComponent,
    HomeComponent,
    CreateNewJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
