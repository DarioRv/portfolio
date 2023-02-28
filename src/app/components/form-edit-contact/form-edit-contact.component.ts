import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFormDataService } from 'src/app/services/contact-data.service';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-edit-contact',
  templateUrl: './form-edit-contact.component.html',
  styleUrls: ['./form-edit-contact.component.css']
})
export class FormEditContactComponent implements OnInit {
  alias!: string;
  icon!: string;
  url!: string;
  constructor (private portfolioData: PortfolioDataService, private contactData: ContactFormDataService, private router: Router) {}

  ngOnInit () {
    this.alias = this.contactData.getRecoveredData().alias;
    this.icon = this.contactData.getRecoveredData().icon;
    this.url = this.contactData.getRecoveredData().url;
  }

  sendForm (form: any) {
    let contact = {
      "id": this.contactData.getRecoveredData().id,
      "alias": this.alias,
      "type": this.contactData.getRecoveredData().type,
      "url": this.url,
      "visible": this.contactData.getRecoveredData().visible,
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
