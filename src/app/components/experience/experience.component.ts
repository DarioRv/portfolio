import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';
import { ExperienceDataFormService } from 'src/app/services/experience-form-data.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'experience-component',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  loadedData: boolean = false;
	laboralExperience: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private getDataForm: ExperienceDataFormService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.laboralExperience = data.laboralExperience;
      this.loadedData = true;
		});

	}

	isLogin(){
		return this.loginService.isLogin();
	}

  getData(id: number, image: string, companyName: string, position: string, description: string, year: string){
    this.getDataForm.getDataForm(id, image, companyName, position, description, year);
  }
  deleteLaboralExperience(id: number) {
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
        this.portfolioData.deleteLaboralExperience(id).subscribe();
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
