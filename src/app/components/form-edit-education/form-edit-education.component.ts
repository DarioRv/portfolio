import { Component, ViewChild } from '@angular/core';
import { EducationFormDataService } from 'src/app/services/education-data.service';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-edit-education',
  templateUrl: './form-edit-education.component.html',
  styleUrls: ['./form-edit-education.component.css']
})
export class FormEditEducationComponent {

  image!: string;
  name!: string;
  shortName!: string;
  certificate!: string;
  date!: string;
  observations!: string;

  constructor(private educationData: EducationFormDataService, private router: Router, private portfolioService: PortfolioDataService) {}

  getUrl() {
    return this.router.url;
  }

  ngOnInit(): void {
    if (this.getUrl() == "/edit-education") {
      this.image = this.educationData.getRecoveredData().institutionImage;
      this.name = this.educationData.getRecoveredData().institutionName;
      this.shortName = this.educationData.getRecoveredData().shortName;
      this.certificate = this.educationData.getRecoveredData().certificate;
      this.date = this.educationData.getRecoveredData().date;
      this.observations = this.educationData.getRecoveredData().observations;
    }
  }

  sendForm(form: NgForm){
    let education = {};
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    if (this.getUrl() == '/add-education'){
      education = { ...education,
        "institutionName": this.name,
        "institutionImage": this.image,
        "shortName": this.shortName,
        "certificate": this.certificate,
        "date": this.date,
        "observations": this.observations,
        "idPersona": 1
      };
      this.portfolioService.addNewEducation(education).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha agregada una nueva educación. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
    else {
      education = { ...education,
        "id": this.educationData.getRecoveredData().id,
        "institutionName": this.name,
        "institutionImage": this.image,
        "shortName": this.shortName,
        "certificate": this.certificate,
        "date": this.date,
        "observations": this.observations,
        "idPersona": 1
      };
      this.portfolioService.editEducation(education).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha actualizado una educación. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
  }

}
