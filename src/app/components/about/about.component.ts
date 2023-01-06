import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
	selector: 'about-section',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent {
    portfolio: any;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}
}
