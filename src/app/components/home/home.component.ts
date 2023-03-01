import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import Typed from 'typed.js';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	name!: string;
	position!: string;
	description!: string;
  telUrl!: string;
	emailUrl!: string;
	linkedinUrl!: string;
  githubUrl!: string;
  githubAlias!: string;

	constructor(private portfolioData: PortfolioDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.name = data.personalData.name;
			this.position = data.personalData.position;
			this.description = data.personalData.description;
      data.contact.forEach((contact: any) => {
        if (contact.type == 'tel') {
          this.telUrl = contact.url;
        }
        if (contact.type == 'email') {
          this.emailUrl = contact.url;

        }
        if (contact.type == 'linkedin') {
          this.linkedinUrl = contact.url;
        }
        if (contact.type == 'github') {
          this.githubUrl = contact.url;
        }
      });
      let typed = new Typed('.position', {
        strings: [this.position],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 4000,
        loop: true
      });
		});
	}
}
