import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-schooloriginlevel',
  templateUrl: './form-schooloriginlevel.component.html',
  styleUrls: ['./form-schooloriginlevel.component.css']
})
export class FormSchooloriginlevelComponent implements OnInit, OnDestroy {

  SchoolOriginLevelFormGroup : FormGroup;
  
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
    this.SchoolOriginLevelFormGroup = this._formBuilder.group({
      levelName : ['', Validators.required],
      user: 2,
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
        this._apiService.getById('school/originlevel',this.id).subscribe(schooloriginlevel => {
          this.SchoolOriginLevelFormGroup.patchValue(schooloriginlevel.data);
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
    const data = this.SchoolOriginLevelFormGroup.value;

    if(this.isNew) {
      this._apiService.create('school/originlevel',data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/school/schooloriginlevel']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('school/originlevel',this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/school/schooloriginlevel']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
