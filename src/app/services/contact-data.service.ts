import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormDataService {
  private recoveredData: any;

  constructor() { }

  setRecoveredData(data: any) {
    this.recoveredData = data;
  }

  getRecoveredData() {
    return this.recoveredData;
  }

  getData(id: number, alias: string, type: string, url: string, visible: boolean, icon: string) {
    const data = {
      id: id,
      alias: alias,
      type: type,
      url: url,
      visible: visible,
      icon: icon
    }
    this.setRecoveredData({...data});
  }
}
