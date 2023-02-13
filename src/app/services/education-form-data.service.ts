import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationFormDataService {

  private recoveredData: any;

  constructor() { }

  setRecoveredData(data: any) {
    this.recoveredData = data;
  }

  getRecoveredData() {
    return this.recoveredData;
  }

  toTitleCase(string: string) {
    return string.split(' ').map((title) => {
      return title.replace(title[0], title[0].toUpperCase());
    }).join(' ');
  }
  toCapitalizeCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getFormData(image: any, name: any, certificate: any, date: any, observations: any) {
    let nameRecovered = this.toTitleCase(name.textContent);
    let imageRecovered = image.getAttribute('src').slice(image.getAttribute('src').lastIndexOf('/') + 1, image.getAttribute('src').length);
    let shortNameRecovered = image.getAttribute('alt').toUpperCase();
    let certificateRecovered = this.toTitleCase(certificate.textContent);
    let dateRecovered = date.textContent.toLowerCase();
    let observationsRecovered = this.toCapitalizeCase(observations.textContent.toLowerCase());

    let data = {
      institutionImage: imageRecovered,
      institutionName: nameRecovered,
      shortName: shortNameRecovered,
      certificate: certificateRecovered,
      date: dateRecovered,
      observations: observationsRecovered
    }
    this.setRecoveredData({...data});
  }
}
