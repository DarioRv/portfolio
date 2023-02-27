import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { ProjectFormDataService } from 'src/app/services/project-data.service';
import Swal from 'sweetalert2';
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
	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private projectData: ProjectFormDataService){}
	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.projects = data.projects;
      this.loadedData = true;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}

  getData(id: number, name: string, date: string, description: string, url: string, technologies: string) {
    this.projectData.getForm(id, name, date, description, url, technologies);
  }

  deleteProject(id: number) {
    Swal.fire({
      title: '¿Está seguro de eliminar este elemento?',
      icon: 'info',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No'
    }).then((res) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      if (res.isConfirmed) {
        this.portfolioData.deleteProject(id).subscribe();
        Toast.fire({
          icon: 'success',
          title: 'Elemento eliminado. Actualizando página'
        });
        setTimeout( () => {window.location.reload();}, 2000);
      }
      else {
        Toast.fire({
          icon: 'info',
          title: 'La acción ha sido cancelada'
        });
      }
    })
  }
}
