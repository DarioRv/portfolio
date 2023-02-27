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

  getData(id: number, image: string, name: string, shortName:string, certificate: string, date: string, observations: string) {
    const data = {
      id: id,
      institutionImage: image,
      institutionName: name,
      shortName: shortName,
      certificate: certificate,
      date: date,
      observations: observations
    }
    this.setRecoveredData({...data});
  }
}
