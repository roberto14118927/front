import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-educationarea',
  templateUrl: './form-educationarea.component.html',
  styleUrls: ['./form-educationarea.component.css']
})
export class FormEducationareaComponent implements OnInit, OnDestroy {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona una nivel'
  };

  selectEducationLevels: any = [];

  EducationAreaFormGroup : FormGroup;
  
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
    private _apiService : ApiService,
  ) { }

  /**
   * 
   */
  ngOnInit() {
    this.buildForm();
    this.actionRoute();
    this.getEducationLevel();
  }

  /**
   * 
   */
  buildForm() : void  {
    this.EducationAreaFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      catEducationLevel : ['', Validators.required],
      abbreviation : ['', Validators.required]
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
        this._apiService.getById('settings/educationarea', this.id).subscribe(educationlevel => {
          this.EducationAreaFormGroup.patchValue(educationlevel.data);
        })
      }
    });
  }


  /**
   * 
   */
  getEducationLevel() : void {
    this._apiService.getSelect('settings/educationlevel').subscribe(educationlevels => {
      this.selectEducationLevels = educationlevels.data;
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
    const data = Object.assign(this.EducationAreaFormGroup.value, { "user": 2 });

    if(this.isNew) {
      this._apiService.create('settings/educationarea', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/educationarea']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('settings/educationarea', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/educationarea']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
