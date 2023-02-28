import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectFormDataService } from 'src/app/services/project-data.service';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-edit-project',
  templateUrl: './form-edit-project.component.html',
  styleUrls: ['./form-edit-project.component.css']
})
export class FormEditProjectComponent implements OnInit {
  name!: string;
  date!: string;
  description!: string;
  url!: string;
  technologies!: string;

  constructor(private projectData: ProjectFormDataService, private router: Router, private portfolioService: PortfolioDataService) { }

  getUrl() {
    return this.router.url;
  }

  ngOnInit(): void {
    if (this.getUrl() == '/edit-project') {
      this.name = this.projectData.getDataRecovered().projectName;
      this.date = this.projectData.getDataRecovered().date;
      this.description = this.projectData.getDataRecovered().description;
      this.url = this.projectData.getDataRecovered().url;
      this.technologies = this.projectData.getDataRecovered().implementedTechnologies;
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
        "id": this.projectData.getDataRecovered().id,
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
