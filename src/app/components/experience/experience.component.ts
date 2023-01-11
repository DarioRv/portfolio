import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'experience-component',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
	laboralExperience: any;

	constructor(private portfolioData: PortfolioDataService, public authService: AuthService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.laboralExperience = data.laboralExperience;
		});
	}

	email = "";
	password = "";

	Login(){
		this.authService.login(this.email, this.password);
	}
}
