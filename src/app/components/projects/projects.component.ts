import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';


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
	constructor(private portfolioData: PortfolioDataService, public authService: AuthService){}
	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.projects = data.projects;
		});
	}

	email = "";
	password = "";
	Login(){
		this.authService.login(this.email, this.password);
	}
}
