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

  toTitleCase(string: string) {
    return string.split(' ').map((title) => {
      return title.replace(title[0], title[0].toUpperCase());
    }).join(' ');
  }
  toCapitalizeCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getDataForm(name: any, date: any, description: any, url: any, technologies: any) {
    let nameRecovered = name.textContent.toUpperCase();
    let dateRecovered = date.textContent;
    let descriptionRecovered = this.toTitleCase(description.textContent);
    let urlRecovered = url.getAttribute("href");
    let technlogiesRecovered = technologies;

    let data = { projectName: nameRecovered,
      date: dateRecovered,
      description: descriptionRecovered,
      url: urlRecovered,
      implementedTechnologies: technlogiesRecovered
    };

    this.setDataRecovered({ ...data });
  }

}
