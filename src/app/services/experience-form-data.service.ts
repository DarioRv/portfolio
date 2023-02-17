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

  getDataForm(id: number, image: string, companyName: string, position: string, description: string, year: string){
    const data = {
      id: id,
      companyImage: image,
      companyName: companyName,
      position: position,
      year: year,
      description: description
    }
    this.setDataRecovered({...data});
  }
}
