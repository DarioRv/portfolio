import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
	selector: 'education-component',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css']
})
export class EducationComponent {
    education: any;

	constructor(private portfolioData: PortfolioDataService, public authService: AuthService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.education = data.education;
		});
	}

	email = "";
	password = "";

	Login(){
		this.authService.login(this.email, this.password);
	}
}
