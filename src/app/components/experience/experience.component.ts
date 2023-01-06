import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
	selector: 'experience-component',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
	portfolio: any;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}
}
