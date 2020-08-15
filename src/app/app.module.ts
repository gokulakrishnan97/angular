import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ApiComponent } from './api/api.component';
import { PostsService } from './services/posts.service';
import { GitFollowersService } from './services/git-followers.service';
import { GitprofileInfoComponent } from './gitprofile-info/gitprofile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    SignupComponent,
    ResetPasswordComponent,
    ApiComponent,
    GitprofileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService, GitFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
