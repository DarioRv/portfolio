import { Component, ViewChild } from '@angular/core';
import { EducationFormDataService } from 'src/app/services/education-form-data.service';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'form-edit-education',
  templateUrl: './form-edit-education.component.html',
  styleUrls: ['./form-edit-education.component.css']
})
export class FormEditEducationComponent {

  @ViewChild("image") image: any;
  @ViewChild("name") name: any;
  @ViewChild("shortName") shortName: any;
  @ViewChild("certificate") certificate: any;
  @ViewChild("date") date: any;
  @ViewChild("observations") observations: any;

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

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.getUrl() == "/edit-education") {
      this.setRecoveredData(this.formData.getRecoveredData());
      this.image.nativeElement.value = this.recoveredData.institutionImage;
      this.name.nativeElement.value = this.recoveredData.institutionName;
      this.shortName.nativeElement.value = this.recoveredData.shortName;
      this.certificate.nativeElement.value = this.recoveredData.certificate;
      this.date.nativeElement.value = this.recoveredData.date;
      this.observations.nativeElement.value = this.recoveredData.observations;
    }
  }

  addNewEducation(form: any){
    const education = `{
      "institutionName": "${form.value.nombreInstituto}",
      "institutionImage": "${form.value.image}",
      "shortName": "${form.value.nombreInstitutoAbreviado}",
      "certificate": "${form.value.titulo}",
      "date": "${form.value.periodo}",
      "observations": "${form.value.descripcion}",
      "idPersona": ${1}
    }`;
    this.portfolioService.addNewEducation(JSON.parse(education)).subscribe(res => {
      console.log(res);
    });
  }

}
