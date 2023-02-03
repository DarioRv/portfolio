import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { FormEditExperienceComponent } from './components/form-edit-experience/form-edit-experience.component';
import { FormEditEducationComponent } from './components/form-edit-education/form-edit-education.component';
import { FormEditProjectComponent } from './components/form-edit-project/form-edit-project.component';
import { LoginGuardian } from './components/login/login-guardian';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

const routes: Routes = [
	{path: "login", component: LoginComponent},
  {path: "edit-experience", component: FormEditExperienceComponent, canActivate: [LoginGuardian]},
  {path: "edit-education", component: FormEditEducationComponent, canActivate: [LoginGuardian]},
  {path: "edit-project", component: FormEditProjectComponent, canActivate: [LoginGuardian]},
	{path: "", redirectTo: "", pathMatch: "full"},
  {path: "unauthorized", component: UnauthorizedComponent},
	{path: "**", component: ErrorComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes), HttpClientModule],
	exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
