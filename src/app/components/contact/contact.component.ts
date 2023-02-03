import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'contact-component',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	portfolio: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.portfolio = data;
		});
	}

  isLogin(){
    return this.loginService.isLogin();
  }
}
