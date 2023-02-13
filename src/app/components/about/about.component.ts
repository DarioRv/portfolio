import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  nacionality!: string;
  age!: string;
  about!: string;

  constructor(private portfolioData: PortfolioDataService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.nacionality = data.personalData.nacionality;
      this.age = data.personalData.age;
      this.about = data.personalData.about;
    });
  }

  isLogin() {
    return this.loginService.isLogin();
  }

}
