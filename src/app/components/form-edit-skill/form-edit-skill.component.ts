import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { SkillDataService } from 'src/app/services/skill-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-edit-skill',
  templateUrl: './form-edit-skill.component.html',
  styleUrls: ['./form-edit-skill.component.css']
})
export class FormEditSkillComponent {
  id!: number;
  image!: string;
  name!: string;

  constructor(private router: Router, private portfolioService: PortfolioDataService, private skillData: SkillDataService) { }

  getUrl() {
    return this.router.url;
  }

  ngOnInit() {
    if (this.getUrl() == '/edit-skill') {
      console.log(this.skillData.getRecoveredData());
      this.id = this.skillData.getRecoveredData().id;
      this.image = this.skillData.getRecoveredData().image;
      this.name = this.skillData.getRecoveredData().name;
    }
  }

  sendForm(form: NgForm) {
    let skill = {};

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })

    if (this.getUrl() == '/add-skill') {
      skill = { ...skill,
        "image": this.image,
        "name": this.name,
        "idPersona": 1
      }
      this.portfolioService.addNewSkill(skill).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha agregada una nueva habilidad. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
    else {
      skill = { ...skill,
        "id": this.id,
        "image": this.image,
        "name": this.name,
        "idPersona": 1
      }
      this.portfolioService.editSkill(skill).subscribe();
      Toast.fire({
        icon: 'success',
        title: 'Se ha actualizado una habilidad. Actualizando página'
      });
      this.router.navigateByUrl('/');
      setTimeout(() => {window.location.reload();}, 2000);
    }
  }
}
