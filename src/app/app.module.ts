import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent, SafePipe } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { PortfolioDataService } from './services/portfolio-data.service';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { EditSectionComponent } from './components/edit-section/edit-section.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { FormEditExperienceComponent } from './components/form-edit-experience/form-edit-experience.component';
import { FormEditEducationComponent } from './components/form-edit-education/form-edit-education.component';
import { FormEditProjectComponent } from './components/form-edit-project/form-edit-project.component';
import { LoginGuardian } from './components/login/login-guardian';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { FormEditContactComponent } from './components/form-edit-contact/form-edit-contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormEditSkillComponent } from './components/form-edit-skill/form-edit-skill.component';
import { HideButtonComponent } from './components/hide-button/hide-button.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';
import { FormEditPersonalDataComponent } from './components/form-edit-personal-data/form-edit-personal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    SafePipe,
    ErrorComponent,
    LanguagesComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    EditSectionComponent,
    AddButtonComponent,
    FormEditExperienceComponent,
    FormEditEducationComponent,
    FormEditProjectComponent,
    UnauthorizedComponent,
    FormEditContactComponent,
    PortfolioComponent,
    FormEditSkillComponent,
    HideButtonComponent,
    ShowButtonComponent,
    FormEditPersonalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ PortfolioDataService, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
