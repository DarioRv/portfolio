import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceDataFormService } from 'src/app/services/experience-data.service';
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

  constructor(private experienceData: ExperienceDataFormService, private router: Router, private portfolioService: PortfolioDataService){}

  getUrl() {
    return this.router.url;
  }

  ngOnInit(): void {
    if (this.getUrl() == "/edit-experience"){
      this.image = this.experienceData.getDataRecovered().companyImage;
      this.name = this.experienceData.getDataRecovered().companyName;
      this.position = this.experienceData.getDataRecovered().position;
      this.year = this.experienceData.getDataRecovered().year;
      this.description = this.experienceData.getDataRecovered().description;
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
        "id": this.experienceData.getDataRecovered().id,
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
