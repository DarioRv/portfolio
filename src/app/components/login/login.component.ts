import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(private loginService: LoginService){}

	
	ngOnInit(): void{}

	login(form:NgForm){
		const email = form.value.email;
		const password = form.value.password;
		console.log(email + " / " + password);
		this.loginService.login(email, password);
	}
}
