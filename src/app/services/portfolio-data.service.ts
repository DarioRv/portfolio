import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private readonly API = 'https://portfolio-api-8cn8.onrender.com';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.API}/get/portfolio?id=1`);
  }

  updatePersonalData(person: any): Observable<any> {
    return this.http.put(`${this.API}/update/personal-data`, person);
  }

  addNewLaboralExperience(experience: any): Observable<any> {
    return this.http.post(`${this.API}/new/laboral-experience`, experience);
  }
  editLaboralExperience(experience: any): Observable<any> {
    return this.http.put(`${this.API}/update/laboral-experience`, experience);
  }
  deleteLaboralExperience(experienceId: any): Observable<any> {
    return this.http.delete(`${this.API}/delete/laboral-experience?id=${experienceId}`);
  }
  getLaboralExperience(): Observable<any> {
    return this.http.get(`${this.API}/view/laboral-experience`);
  }

  addNewEducation(education: any): Observable<any> {
    return this.http.post(`${this.API}/new/education`, education);
  }
  editEducation(education: any): Observable<any> {
    return this.http.put(`${this.API}/update/education`, education);
  }
  deleteEducation(educationId: any): Observable<any> {
    return this.http.delete(`${this.API}/delete/education?id=${educationId}`);
  }
  getEducation(): Observable<any> {
    return this.http.get(`${this.API}/view/education`);
  }

  addNewSkill(skill: any): Observable<any> {
    return this.http.post(`${this.API}/new/skill`, skill);
  }
  editSkill(skill: any): Observable<any> {
    return this.http.put(`${this.API}/update/skill`, skill);
  }
  deleteSkill(skillId: any): Observable<any> {
    return this.http.delete(`${this.API}/delete/skill?id=${skillId}`);
  }
  getSkills(): Observable<any> {
    return this.http.get(`${this.API}/view/skills`);
  }

  addNewProject(project: any): Observable<any> {
    return this.http.post(`${this.API}/new/project`, project);
  }
  editProject(project: any): Observable<any> {
    return this.http.put(`${this.API}/update/project`, project);
  }
  deleteProject(projectId: any): Observable<any> {
    return this.http.delete(`${this.API}/delete/project?id=${projectId}`);
  }
  getProjects(): Observable<any> {
    return this.http.get(`${this.API}/view/projects`);
  }

  addNewContact(contact: any): Observable<any> {
    return this.http.post(`${this.API}/new/contact`, contact)
  }
  editContact(contact: any): Observable<any> {
    return this.http.put(`${this.API}/update/contact`, contact)
  }
  deleteContact(contactId: any): Observable<any> {
    return this.http.delete(`${this.API}/delete/contact?id=${contactId}`)
  }
  getContact(): Observable<any> {
    return this.http.get(`${this.API}/view/contacts`)
  }

}
