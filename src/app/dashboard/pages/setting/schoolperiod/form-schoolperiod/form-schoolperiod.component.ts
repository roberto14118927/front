import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { formattedDate, converterDate } from '../../../../../../config/date';
import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-schoolperiod',
  templateUrl: './form-schoolperiod.component.html',
  styleUrls: ['./form-schoolperiod.component.css']
})
export class FormSchoolperiodComponent implements OnInit, OnDestroy {

  SchoolPeriodFormGroup : FormGroup;
  
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
    this.SchoolPeriodFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      acronym : ['', Validators.required],
      monthNumber : ['', Validators.required],
      initMonth : ['', Validators.required],
      endMonth : ['', Validators.required],
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
        this._apiService.getById('settings/schoolperiod',this.id).subscribe(schoolperiod => {
          this.SchoolPeriodFormGroup.patchValue(schoolperiod.data);
          this.SchoolPeriodFormGroup.get('initMonth').setValue(converterDate(schoolperiod.data.initMonth));
          this.SchoolPeriodFormGroup.get('endMonth').setValue(converterDate(schoolperiod.data.endMonth));
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
    this.SchoolPeriodFormGroup.get('initMonth').setValue(formattedDate(this.SchoolPeriodFormGroup.get('initMonth').value));
    this.SchoolPeriodFormGroup.get('endMonth').setValue(formattedDate(this.SchoolPeriodFormGroup.get('endMonth').value));

    const data = this.SchoolPeriodFormGroup.value;

    if(this.isNew) {
      this._apiService.create('settings/schoolperiod',data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/schoolperiod']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('settings/schoolperiod',this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/schoolperiod']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
