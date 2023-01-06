import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    portfolio: any;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}
}
