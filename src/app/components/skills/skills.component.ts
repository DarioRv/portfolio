import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'skills-component',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
	skills: any;

	constructor(private portfolioData: PortfolioDataService, public authService: AuthService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.skills = data.skills;
		});
	}

	email = "";
	password = "";
	Login(){
		this.authService.login(this.email, this.password);
	}
}
