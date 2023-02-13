import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';
import { EducationFormDataService } from 'src/app/services/education-form-data.service';

@Component({
	selector: 'education-component',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css']
})
export class EducationComponent {

  education: any;
  loadedData: boolean = false;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private FormData: EducationFormDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.education = data.education;
      this.loadedData = true;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}
	logout(){
		this.loginService.logout();
	}
  getFormData(image: any, name: any, certificate: any, date: any, observations: any){
    this.FormData.getFormData(image, name, certificate, date, observations);
  }
}
