import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormDataService {

  private dataRecovered: any;

  constructor() { }

  setDataRecovered(data: any) {
    this.dataRecovered = data;
  }

  getDataRecovered(){
    return this.dataRecovered;
  }

  getForm(id: number, name: string, date: string, description: string, url: string, technologies: string) {
    const data = {
      id: id,
      projectName: name,
      date: date,
      description: description,
      url: url,
      implementedTechnologies: technologies
    };
    this.setDataRecovered({ ...data });
  }

}
