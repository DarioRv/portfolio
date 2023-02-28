import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { SkillDataService } from 'src/app/services/skill-data.service';

@Component({
	selector: 'skills-component',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
	skills: any;

	constructor(private portfolioData: PortfolioDataService, private loginService: LoginService, private skillData: SkillDataService){}

	ngOnInit(): void{
		this.portfolioData.getData().subscribe(data => {
			this.skills = data.skills;
		});
	}

	isLogin(){
		return this.loginService.isLogin();
	}

	logout(){
		this.loginService.logout();
	}

  getData(id: number, name: string, image: string) {
    this.skillData.getData(id, name, image);
  }

  deleteSkill(id: number) {
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
        this.portfolioData.deleteSkill(id).subscribe();
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
