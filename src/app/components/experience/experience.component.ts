import { Component, ElementRef, ViewChild} from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';
import { ExperienceDataFormService } from 'src/app/services/experience-form-data.service';

@Component({
	selector: 'experience-component',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  loadedData: boolean = false;
	laboralExperience: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private getDataForm: ExperienceDataFormService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.laboralExperience = data.laboralExperience;
      this.loadedData = true;
		});

	}

	isLogin(){
		return this.loginService.isLogin();
	}

  getData(image:any, companyName:any, position:any, description:any, year:any){
    this.getDataForm.getDataForm(image, companyName, position, description, year);
  }
}
