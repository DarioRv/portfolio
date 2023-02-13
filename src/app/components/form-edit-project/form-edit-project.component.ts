import { Component, ViewChild } from '@angular/core';
import { ProjectFormDataService } from 'src/app/services/project-form-data.service';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'form-edit-project',
  templateUrl: './form-edit-project.component.html',
  styleUrls: ['./form-edit-project.component.css']
})
export class FormEditProjectComponent {
  @ViewChild("name") name: any;
  @ViewChild("date") date: any;
  @ViewChild("description") description: any;
  @ViewChild("url") url: any;
  @ViewChild("technologies") technologies: any;

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

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.getUrl() == "/edit-project") {
      this.setDataRecovered(this.formData.getDataRecovered());
      console.log(this.recoveredData);
      this.name.nativeElement.value = this.recoveredData.projectName;
      this.date.nativeElement.value = this.recoveredData.date;
      this.description.nativeElement.value = this.recoveredData.description;
      this.url.nativeElement.value = this.recoveredData.url;
      this.technologies.nativeElement.value = this.recoveredData.implementedTechnologies;
    }
  }

  addNewProject(form: any) {
    const project = `{
      "projectName": "${form.value.nombreProyecto}",
      "date": "${form.value.periodo}",
      "description": "${form.value.descripcion}",
      "url": "${form.value.url}",
      "implementedTechnologies": "${form.value.tecnologias}",
      "idPersona": ${1}
    }`;
    this.portfolioService.addNewProject(JSON.parse(project)).subscribe(res => {
      console.log(res);
    });
  }

}
