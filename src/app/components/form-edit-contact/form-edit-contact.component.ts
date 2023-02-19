import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFormDataService } from 'src/app/services/contact-form-data.service';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-edit-contact',
  templateUrl: './form-edit-contact.component.html',
  styleUrls: ['./form-edit-contact.component.css']
})
export class FormEditContactComponent {
  alias!: string;
  icon!: string;
  url!: string;
  recoveredData!: any;
  constructor (private portfolioData: PortfolioDataService, private formData: ContactFormDataService, private router: Router) {}

  setRecoveredData(data: any) {
    this.recoveredData = data;
  }

  getRecoveredData() {
    return this.recoveredData;
  }

  ngOnInit () {
    this.setRecoveredData(this.formData.getRecoveredData());
    this.alias = this.recoveredData.alias;
    this.icon = this.recoveredData.icon;
    this.url = this.recoveredData.url;
  }

  sendForm (form: any) {
    let contact = {
      "id": this.recoveredData.id,
      "alias": this.alias,
      "type": this.recoveredData.type,
      "url": this.url,
      "visible": this.recoveredData.visible,
      "icon": this.icon,
      "idPersona": 1,
    };
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    this.portfolioData.editContact(contact).subscribe();
    Toast.fire({
      icon: 'success',
      title: 'Se ha editado un contacto. Actualizando página'
    });
    this.router.navigateByUrl('/');
    setTimeout(() => {window.location.reload();}, 2000);
  }
}
