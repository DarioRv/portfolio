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

  getFormData(id: number, address: string, alias: string, type: string, url: string, visible: boolean) {
    const data = {
      id: id,
      address: address,
      alias: alias,
      type: type,
      url: url,
      visible: visible,
    }
    this.setRecoveredData({...data});
  }
}
