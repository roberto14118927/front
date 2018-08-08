import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  /**
   * 
   * @param _formBuilder 
   * @param _router 
   * @param _authentication 
   * @param _toastr 
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _toastr: ToastrService,
    private _authentication: AuthenticationService) {
    if (_authentication.isAuthenticated()) {
      _router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * 
   * 
   */
  login(): void {
    const data = this.loginFormGroup.value;

    if (data.username && data.password) {
      this._authentication.login(data.username, data.password).subscribe(access => {
        localStorage.setItem('user', JSON.stringify(access));
        this._toastr.success('Bienvenido');
        this._router.navigate(['dashboard']);
      }, error => {
        console.log('Error api', error);
        this._toastr.error('Datos incorrectos');
        this._router.navigate(['login']);
      });
    }
  }

}
