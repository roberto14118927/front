import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-schoolorigin',
  templateUrl: './form-schoolorigin.component.html',
  styleUrls: ['./form-schoolorigin.component.css']
})
export class FormSchooloriginComponent implements OnInit, OnDestroy {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  selectConfigState: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un estado'
  };

  selectConfigCity: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona una ciudad'
  };

  selectEducationLevels: any = [];
  selectStates : any = [];
  selectCityes : any = [];

  isEnabled : boolean = false;

  SchoolOriginFormGroup : FormGroup;
  
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
    this.getSelect('settings/educationlevel', 'selectEducationLevels');
    this.getSelect('region/state', 'selectStates');
  }

  /**
   * 
   */
  buildForm() {
    this.SchoolOriginFormGroup = this._formBuilder.group({
      catEducationLevel : ['', Validators.required],
      schoolName : ['', Validators.required],
      schoolCity : ['', Validators.required],
      address : ['', Validators.required],
      postalCode : ['', Validators.required],
      phone : ['', Validators.required],
      email : ['', Validators.required],
      webSite : ['', Validators.required],
      lat : ['', Validators.required],
      lon : ['', Validators.required],
      user: this._auth.user(),
      schoolState: null
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
        this._apiService.getById('school/origin',this.id).subscribe(schoolorigin => {
          this.SchoolOriginFormGroup.patchValue(schoolorigin.data);
        })
      }
    });
  }

  /**
   * 
   */
  getSelect(endPoint:string, arrayName:string) : void {
    this._apiService.getSelect(endPoint).subscribe(data => {
      this[arrayName] = data.data;
    });
  }

  onChange(id:number){
    if(id){
      this._apiService.getSelectById('region/cities', id).subscribe(cityes => {
        this.selectCityes = cityes.data;
        this.isEnabled = true;
      });
    }else {
      this.isEnabled = false;
    }
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
    const data = this.SchoolOriginFormGroup.value;

    if(this.isNew) {
      this._apiService.create('school/origin', data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/school/schoolorigin']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('school/origin', this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/school/schoolorigin']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
