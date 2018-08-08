import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-studentparent',
  templateUrl: './form-studentparent.component.html',
  styleUrls: ['./form-studentparent.component.css']
})
export class FormStudentparentComponent implements OnInit, OnDestroy {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  selectTypePatents: any = [];

  studentParentFormGroup : FormGroup;
  
  route : any;
  isNew : boolean;
  txtBtn : string;
  classBtn : string;
  id : number;

  phones : any  = [];


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
    this.getSelect('settings/studentparenttype', 'selectTypePatents');
  }

  /**
   * 
   */
  buildForm() : void  {
    this.studentParentFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      lastName : ['', Validators.required],
      phone: ['', Validators.required],
      address : ['', Validators.required],
      email : ['', Validators.required],
      parentType : ['', Validators.required],
      maxStudyGrade : ['', Validators.required],
      occupation : [],
      user : 2
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
        this._apiService.getById('school/studentparent', this.id).subscribe(educationlevel => {
          this.studentParentFormGroup.patchValue(educationlevel.data);
          this.phones = educationlevel.data.phone;
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

  /**
   * 
   */
  ngOnDestroy() {
    this.route.unsubscribe();
  }

  /**
   * 
   */
  addPhone() : void {
    let phone = this.studentParentFormGroup.get('phone').value;
    
    let index = Object.keys(this.phones).length ++;

    let data : any = {};

    data = Object.assign(data, { id: index, phone : phone });
    
    this.phones.push(data);
    
    this.studentParentFormGroup.get('phone').setValue('');

    this.studentParentFormGroup.get('phone').clearValidators();
    this.studentParentFormGroup.get('phone').updateValueAndValidity();
  }


  /**
   * 
   * @param item 
   */
  removePhone(item:any) : void {
    let index = this.phones.indexOf(item, 0);
    if (index > -1) {
      this.phones.splice(index, 1);
    }

    if(this.phones.length == 0){
      this.studentParentFormGroup.get('phone').setValidators([Validators.required]);
    }else {
      this.studentParentFormGroup.get('phone').clearValidators();
    }
    
    this.studentParentFormGroup.get('phone').updateValueAndValidity();
  }

  /**
   * 
   */
  save() : void {
    this.studentParentFormGroup.get('phone').setValue(this.phones);

    const data = this.studentParentFormGroup.value;

    if(this.isNew) {
      this._apiService.create('school/studentparent', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/school/studentparent']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('school/studentparent', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/school/studentparent']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }

}
