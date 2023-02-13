import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'contact-component',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  tel!: string;
  emailAddress!: string;
  emailUrl!: string;
  linkedinAlias!: string;
  linkedinUrl!: string;
  githubAlias!: string;
  githubUrl!: string;
  address!: string;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
      this.address = data.personalData.address;
      data.contact.forEach((contact: any) => {
        if (contact.type == "tel")
          this.tel = contact.address;
        if (contact.type == "email"){
          this.emailUrl = contact.url;
          this.emailAddress = contact.address;

        }
        if (contact.type == "linkedin"){
          this.linkedinUrl = contact.url;
          this.linkedinAlias = contact.alias;
        }
        if (contact.type == "github"){
          this.githubAlias = contact.alias;
          this.githubUrl = contact.url;
        }
      });
		});
	}

  isLogin(){
    return this.loginService.isLogin();
  }
}
