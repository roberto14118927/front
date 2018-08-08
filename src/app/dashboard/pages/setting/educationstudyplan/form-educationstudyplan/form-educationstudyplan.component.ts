import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { formattedDate, converterDate } from '../../../../../../config/date';
import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-educationstudyplan',
  templateUrl: './form-educationstudyplan.component.html',
  styleUrls: ['./form-educationstudyplan.component.css']
})
export class FormEducationstudyplanComponent implements OnInit, OnDestroy {

  educationStudyPlanFormGroup : FormGroup;
  
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
    this.educationStudyPlanFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      initDate : ['', Validators.required],
      isActive: false,
      user: 2
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
        this._apiService.getById('settings/educationstudyplan',this.id).subscribe(educationstudyplan => {
          this.educationStudyPlanFormGroup.patchValue(educationstudyplan.data);
          this.educationStudyPlanFormGroup.get('initDate').setValue(converterDate(educationstudyplan.data.initDate));
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
    this.educationStudyPlanFormGroup.get('initDate').setValue(formattedDate(this.educationStudyPlanFormGroup.get('initDate').value));

    const data = this.educationStudyPlanFormGroup.value;

    if(this.isNew) {
      this._apiService.create('settings/educationstudyplan', data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/educationstudyplan']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('settings/educationstudyplan', this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/educationstudyplan']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
