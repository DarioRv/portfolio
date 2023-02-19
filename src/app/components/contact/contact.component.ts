import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';
import { ContactFormDataService } from 'src/app/services/contact-form-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  tel!: any;
  email!: any;
  linkedin!: any;
  github!: any;
  address!: any;
  class: any;

  constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private formData: ContactFormDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.address = data.personalData.address;
      data.contact.forEach((contact: any) => {
        if (contact.type == "tel") {
          this.tel = { ...contact };
        }
        if (contact.type == "email") {
          this.email = { ...contact };
        }
        if (contact.type == "linkedin") {
          this.linkedin = { ...contact };
        }
        if (contact.type == "github") {
          this.github = { ...contact };
        }
      });
    });
  }

  isLogin() {
    return this.loginService.isLogin();
  }

  getFormData(id: number, address: string, alias: string, type: string, url: string, visible: boolean) {
    this.formData.getFormData(id, address, alias, type, url, visible);
  }

  hideItem(contact: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    Swal.fire({
      title: '¿Está seguro de cambiar la visibilidad de este elemento?',
      icon: 'info',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No'
    }).then((res) => {
      if (res.isConfirmed) {
        contact.visible = !contact.visible;
        if (contact.visible) {
          this.portfolioData.editContact(contact).subscribe();
          Toast.fire({
            icon: 'success',
            title: 'Se ha habilitado un contacto para el público.'
          });
        }
        else {
          this.portfolioData.editContact(contact).subscribe();
          Toast.fire({
            icon: 'success',
            title: 'Se ha ocultado un contacto para el público.'
          });
        }
      }
      else {
        Toast.fire({
          icon: 'info',
          title: 'La acción ha sido cancelada'
        });
      }
    });
  }
}
