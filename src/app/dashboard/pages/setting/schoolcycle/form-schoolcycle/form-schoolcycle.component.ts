import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-schoolcycle',
  templateUrl: './form-schoolcycle.component.html',
  styleUrls: ['./form-schoolcycle.component.css']
})
export class FormSchoolcycleComponent  implements OnInit, OnDestroy {

  SchoolCycleFormGroup : FormGroup;
  
  route : any;
  isNew : boolean;
  txtBtn : string;
  classBtn : string;
  id : number;

  /**
   * 
   * @param _formBuilder 
   * @param _router 
   * @param _activeRoute 
   * @param _toastr 
   * @param _apiService 
   * @param _auth
   */
  constructor(
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activeRoute : ActivatedRoute,
    private _toastr : ToastrService,
    private _apiService : ApiService,
    private _auth : AuthenticationService
  ) { }

  /**
   * 
   */
  ngOnInit() {
    this.buildForm();
    this.actionRoute();
  }

  /**
   * 
   */
  buildForm() {
    this.SchoolCycleFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      user: 2,
      isCurrent: false
    },{});
  }

  /**
   * 
   */
  actionRoute() {
    this.route = this._activeRoute.params.subscribe(params => {
      if(params['id'] == undefined){
        this.isNew = true;
        this.txtBtn = 'Crear';
        this.classBtn = 'btn btn-primary';
      }else{
        this.isNew = false;
        this.id = + params['id'];
        this.txtBtn = 'Editar';
        this.classBtn = 'btn btn-success';
        this._apiService.getById('settings/schoolcycle',this.id).subscribe(schoolcycle => {
          this.SchoolCycleFormGroup.patchValue(schoolcycle.data);
        })
      }
    });
  }

  /**
   * 
   */
  ngOnDestroy() {
    this.route.unsubscribe();
  }

  /**
   * 
   */
  save() : void {
    const data = this.SchoolCycleFormGroup.value;

    if(this.isNew) {
      this._apiService.create('settings/schoolcycle',data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/schoolcycle']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('settings/schoolcycle',this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/schoolcycle']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
