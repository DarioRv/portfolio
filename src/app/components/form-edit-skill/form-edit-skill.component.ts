import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-form-edit-skill',
  templateUrl: './form-edit-skill.component.html',
  styleUrls: ['./form-edit-skill.component.css']
})
export class FormEditSkillComponent {
  private recoveredData: any;

  constructor(private router: Router, private portfolioService: PortfolioDataService) { }


  setDataRecovered(data: any) {
    this.recoveredData = data;
  }

  getDataRecovered() {
    return this.recoveredData;
  }

  getUrl() {
    return this.router.url;
  }

  addNewSkill(form: any) {
    const skill = `{
      "name": "${form.value.habilidad}",
      "image": "${form.value.imagen}",
      "idPersona": ${1}
    }`;
    this.portfolioService.addNewSkill(JSON.parse(skill)).subscribe();
  }
}
