import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'skills-component',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
	skills: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.skills = data.skills;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}
	logout(){
		this.loginService.logout();
	}
}
