import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
	selector: 'education-component',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css']
})
export class EducationComponent {
    portfolio: any;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}
}
