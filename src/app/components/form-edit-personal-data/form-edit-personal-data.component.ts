import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-edit-personal-data',
  templateUrl: './form-edit-personal-data.component.html',
  styleUrls: ['./form-edit-personal-data.component.css']
})
export class FormEditPersonalDataComponent implements OnInit {
  id!: number;
  name!: string;
  position!: string;
  description!: string;
  age!: string;
  nacionality!: string;
  address!: string;
  about!: string;

  constructor(private portfolioData: PortfolioDataService, private router: Router) { }

  ngOnInit() {
    this.portfolioData.getData().subscribe(data => {
      this.id = data.personalData.id;
      this.name = data.personalData.name;
      this.position = data.personalData.position;
      this.description = data.personalData.description;
      this.age = data.personalData.age;
      this.nacionality = data.personalData.nacionality;
      this.address = data.personalData.address;
      this.about = data.personalData.about;
    });
  }

  sendForm(form: any) {
    const personalData = {
      "id": this.id,
      "name": this.name,
      "position": this.position,
      "description": this.description,
      "age": this.age,
      "nacionality": this.nacionality,
      "address": this.address,
      "about": this.about
    }
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    this.portfolioData.updatePersonalData(personalData).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha edita la información personal. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
  }
}
