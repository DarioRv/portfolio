import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceDataFormService } from 'src/app/services/experience-form-data.service';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-edit-experience',
  templateUrl: './form-edit-experience.component.html',
  styleUrls: ['./form-edit-experience.component.css']
})
export class FormEditExperienceComponent {
  image!: string;
  name!: string;
  position!: string;
  year!: string;
  description!: string;

  private recoveredData: any;

  constructor(private formData: ExperienceDataFormService, private router: Router, private portfolioService: PortfolioDataService){}

  setDataRecovered(data: any) {
    this.recoveredData = data;
  }

  getDataRecovered() {
    return this.recoveredData;
  }

  getUrl() {
    return this.router.url;
  }

  ngOnInit(): void {
    if (this.getUrl() == "/edit-experience"){
      this.setDataRecovered(this.formData.getDataRecovered());
      this.image = this.recoveredData.companyImage;
      this.name = this.recoveredData.companyName;
      this.position = this.recoveredData.position;
      this.year = this.recoveredData.year;
      this.description = this.recoveredData.description;
    }
  }

  sendForm(form: NgForm) {
    let experience = {};

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })

    if (this.getUrl() == '/add-experience') {
      experience = {...experience,
        "companyImage": this.image,
        "companyName": this.name,
        "position": this.position,
        "year": this.year,
        "description": this.description,
        "idPersona": 1
      };
      this.portfolioService.addNewLaboralExperience(experience).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha agregada una nueva experiencia laboral. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
    else {
      experience = {...experience,
        "id": this.formData.getDataRecovered().id,
        "companyImage": this.image,
        "companyName": this.name,
        "position": this.position,
        "year": this.year,
        "description": this.description,
        "idPersona": 1
      };
      this.portfolioService.editLaboralExperience(experience).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha actualizado una experiencia laboral. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
  }
}
