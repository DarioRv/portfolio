import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private API = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  getData(): Observable<any> {
    return this.http.get(`${this.API}/get/portfolio?id=1`);
  }

  addNewLaboralExperience(experience: any): Observable<any> {
    return this.http.post(`${this.API}/new/laboral-experience`, experience);
  }

  addNewEducation(education: any): Observable<any> {
    return this.http.post(`${this.API}/new/education`, education);
  }

  addNewSkill(skill: any): Observable<any> {
    return this.http.post(`${this.API}/new/skill`, skill);
  }

  addNewProject(project: any): Observable<any> {
    return this.http.post(`${this.API}/new/project`, project);
  }

}
