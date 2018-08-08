import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-educationtype',
  templateUrl: './form-educationtype.component.html',
  styleUrls: ['./form-educationtype.component.css']
})
export class FormEducationtypeComponent implements OnInit, OnDestroy {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Seleccione un tipo'
  };

  selectInstitutions: any = [];

  EducationTypeFormGroup : FormGroup;
  
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
   */
  constructor(
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _activeRoute : ActivatedRoute,
    private _toastr : ToastrService,
    private _apiService : ApiService
  ) { }

  /**
   * 
   */
  ngOnInit() {
    this.buildForm();
    this.actionRoute();
    this.getInstitutions();
  }

  /**
   * 
   */
  buildForm() : void  {
    this.EducationTypeFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      Institution : ['', Validators.required]
    },{});
  }

  /**
   * 
   */
  actionRoute() : void {
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
        this._apiService.getById('settings/educationtype', this.id).subscribe(educationtype => {
          this.EducationTypeFormGroup.patchValue(educationtype.data);
        })
      }
    });
  }


  /**
   * 
   */
  getInstitutions() : void {
    this._apiService.getSelect('settings/institution').subscribe(institutions => {
      this.selectInstitutions = institutions.data;
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
    const data = Object.assign(this.EducationTypeFormGroup.value, { "user": 2 });

    if(this.isNew) {
      this._apiService.create('settings/educationtype', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/educationtype']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('settings/educationtype', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/educationtype']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
