import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';
import { EducationFormDataService } from 'src/app/services/education-form-data.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'education-component',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css']
})
export class EducationComponent {

  education: any;
  loadedData: boolean = false;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private FormData: EducationFormDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.education = data.education;
      this.loadedData = true;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}
	logout(){
		this.loginService.logout();
	}
  getFormData(id: number, image: string, name: string, shortName: string, certificate: string, date: string, observations: string){
    this.FormData.getFormData(id, image, name, shortName, certificate, date, observations);
  }
  deleteEducation(id: number) {
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
        this.portfolioData.deleteEducation(id).subscribe();
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
