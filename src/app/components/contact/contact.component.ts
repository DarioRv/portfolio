import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
	selector: 'contact-component',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	portfolio: any;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}
}
