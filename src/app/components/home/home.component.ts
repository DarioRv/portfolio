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
  githubUrl: string = "";

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.name = data.personalData.name;
			this.position = data.personalData.position;
			this.description = data.personalData.description;
      data.contact.forEach((contact: any) => {
        if (contact.type == "tel")
          this.tel = contact.alias;
        if (contact.type == "email"){
          this.emailUrl = contact.url;
          this.emailAddress = contact.alias;

        }
        if (contact.type == "linkedin"){
          this.linkedinUrl = contact.url;
          this.linkedinAlias = contact.alias;
        }
        if (contact.type == "github"){
          this.githubUrl = contact.url;
        }
      });
		});
	}
}
