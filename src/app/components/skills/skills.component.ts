import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
	selector: 'skills-component',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
	portfolio: any;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}
}
