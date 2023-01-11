import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
	name: string = "";
	position: string = "";
	description: string = "";
	tel: string = "";
	emailUrl: string = "";
	emailAddress: string = "";
	linkedinUrl: string = "";
	linkedinAlias: string = "";

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.name = data.name;
			this.position = data.position;
			this.description = data.description;
			this.tel = data.contact.tel;
			this.emailUrl = data.contact.email.url;
			this.emailAddress = data.contact.email.address;
			this.linkedinUrl = data.contact.linkedin.url;
			this.linkedinAlias = data.contact.linkedin.alias;
		});
	}
}
