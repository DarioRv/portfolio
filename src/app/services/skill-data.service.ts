import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {
  private recoveredData: any;

  constructor() { }

  setRecoveredData(data: any) {
    this.recoveredData = data;
  }

  getRecoveredData() {
    return this.recoveredData;
  }

  getData(id: number, name: string, image: string, type: string) {
    const data = {
      id: id,
      name: name,
      image: image,
      type: type
    }
    this.setRecoveredData({...data});
  }
}
