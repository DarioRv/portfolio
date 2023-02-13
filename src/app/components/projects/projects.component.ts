import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { ProjectFormDataService } from 'src/app/services/project-form-data.service';
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
	constructor(private domSanitizer: DomSanitizer) {}
	transform(url: any) {
		return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
	}
}

@Component({
	selector: 'projects-component',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
	projects: any;
  loadedData: boolean = false;
	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private getDataForm: ProjectFormDataService){}
	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.projects = data.projects;
      this.loadedData = true;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}

  getData(name: any, date: any, description: any, url: any, technologies: any) {
    this.getDataForm.getDataForm(name, date, description, url, technologies);
  }
}
