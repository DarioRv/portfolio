import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDataFormService {

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

  getDataForm(image: any, companyName: any, position: any, description: any, year: any){

    let imageRecovered = image.getAttribute('src').slice(image.getAttribute('src').lastIndexOf('/') + 1, image.getAttribute('src').length);
    let companyNameRecovered = companyName.textContent.toUpperCase();
    let positionRecovered = this.toTitleCase(position.textContent);
    let descriptionRecovered = this.toCapitalizeCase(description.textContent.toLowerCase());
    let yearRecovered = year.textContent.toLowerCase();

    let data = { companyImage: imageRecovered,
      companyName: companyNameRecovered,
      position: positionRecovered,
      year: yearRecovered,
      description: descriptionRecovered
    }

    this.setDataRecovered({...data});
  }
}
