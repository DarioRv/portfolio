import { Component, ViewChild } from '@angular/core';
import { EducationFormDataService } from 'src/app/services/education-form-data.service';
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

  private recoveredData: any;

  constructor(private formData: EducationFormDataService, private router: Router, private portfolioService: PortfolioDataService) {}

  setRecoveredData(data: any) {
    this.recoveredData = data;
  }

  getRecoveredData() {
    return this.recoveredData;
  }

  getUrl() {
    return this.router.url;
  }

  ngOnInit(): void {
    if (this.getUrl() == "/edit-education") {
      this.setRecoveredData(this.formData.getRecoveredData());
      this.image = this.recoveredData.institutionImage;
      this.name = this.recoveredData.institutionName;
      this.shortName = this.recoveredData.shortName;
      this.certificate = this.recoveredData.certificate;
      this.date = this.recoveredData.date;
      this.observations = this.recoveredData.observations;
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
        "id": this.formData.getRecoveredData().id,
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
