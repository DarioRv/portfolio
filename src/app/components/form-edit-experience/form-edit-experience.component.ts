import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceDataFormService } from 'src/app/services/experience-form-data.service';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'form-edit-experience',
  templateUrl: './form-edit-experience.component.html',
  styleUrls: ['./form-edit-experience.component.css']
})
export class FormEditExperienceComponent {
  @ViewChild("image") image: any;
  @ViewChild("name") name: any;
  @ViewChild("position") position: any;
  @ViewChild("year") year: any;
  @ViewChild("description") description: any;

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

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.getUrl() == "/edit-experience"){
      this.setDataRecovered(this.formData.getDataRecovered());
      this.image.nativeElement.value = this.recoveredData.companyImage;
      this.name.nativeElement.value = this.recoveredData.companyName;
      this.position.nativeElement.value = this.recoveredData.position;
      this.year.nativeElement.value = this.recoveredData.year;
      this.description.nativeElement.value = this.recoveredData.description;
    }
  }

  addNewLaboralExperience(form: any) {
    const experience = `{
      "companyImage": "${form.value.imagen}",
      "companyName": "${form.value.nombreEmpresa}",
      "position": "${form.value.posicion}",
      "year": "${form.value.periodo}",
      "description": "${form.value.descripcion}",
      "idPersona": ${1}
    }`;
    this.portfolioService.addNewLaboralExperience(JSON.parse(experience)).subscribe( res =>
      console.log(res)
    );
  }
}
