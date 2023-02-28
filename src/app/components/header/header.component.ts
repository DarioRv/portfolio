import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from 'src/app/services/login.service';


@Component({
	selector: 'header-component',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private loginService: LoginService){}

	ngOnInit(){}

	isLogin(){
		return this.loginService.isLogin();
	}

	logout(){
		this.loginService.logout();
	}

}
