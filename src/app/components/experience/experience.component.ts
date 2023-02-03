import { Component, ElementRef, ViewChild} from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'experience-component',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
	laboralExperience: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.laboralExperience = data.laboralExperience;
		});

	}

	isLogin(){
		return this.loginService.isLogin();
	}

  getData(image: any, companyName: any, position: any, description: any, year: any){

    let imageRecovered = image.getAttribute('src').slice(image.getAttribute('src').lastIndexOf('/') + 1, image.getAttribute('src').length);
    let companyNameRecovered = companyName.textContent.toLowerCase();
    let positionRecovered = position.textContent.toLowerCase();
    let descriptionRecovered = description.textContent.toLowerCase();
    let yearRecovered = year.textContent.toLowerCase();

    const objeto = { companyImage: imageRecovered,
      companyName: companyNameRecovered,
      position: positionRecovered,
      year: descriptionRecovered,
      description: yearRecovered
    }

    console.log(objeto);
  }

}
