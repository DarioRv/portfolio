import { Component, ViewChild } from '@angular/core';
import { ProjectFormDataService } from 'src/app/services/project-form-data.service';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-edit-project',
  templateUrl: './form-edit-project.component.html',
  styleUrls: ['./form-edit-project.component.css']
})
export class FormEditProjectComponent {
  name!: string;
  date!: string;
  description!: string;
  url!: string;
  technologies!: string;

  private recoveredData: any;

  constructor(private formData: ProjectFormDataService, private router: Router, private portfolioService: PortfolioDataService) { }

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
    if (this.getUrl() == "/edit-project") {
      this.setDataRecovered(this.formData.getDataRecovered());
      console.log(this.recoveredData);
      this.name = this.recoveredData.projectName;
      this.date = this.recoveredData.date;
      this.description = this.recoveredData.description;
      this.url = this.recoveredData.url;
      this.technologies = this.recoveredData.implementedTechnologies;
    }
  }

  sendForm(form: NgForm) {
    let project = {};

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })

    if (this.getUrl() == '/add-project') {
      project = {...project,
        "projectName": this.name,
        "date": this.date,
        "description": this.description,
        "url": this.url,
        "implementedTechnologies": this.technologies,
        "idPersona": 1
      };
      this.portfolioService.addNewProject(project).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha agregada un nuevo proyecto. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
    else {
      project = {...project,
        "id": this.formData.getDataRecovered().id,
        "projectName": this.name,
        "date": this.date,
        "description": this.description,
        "url": this.url,
        "implementedTechnologies": this.technologies,
        "idPersona": 1
      };
      this.portfolioService.editProject(project).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha actualizado un proyecto. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
  }

}
