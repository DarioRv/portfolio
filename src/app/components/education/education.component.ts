import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'education-component',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css']
})
export class EducationComponent {
    education: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.education = data.education;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}
	logout(){
		this.loginService.logout();
	}
}
