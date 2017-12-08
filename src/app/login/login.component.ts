import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private loginForm = new FormGroup({
    password: new FormControl(''),
    username: new FormControl('')
  });

  constructor (private router: Router) { }

  private login (loginData: any) {
    console.info('login data: ', loginData);
  }
}
