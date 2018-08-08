import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-educationlevel',
  templateUrl: './form-educationlevel.component.html',
  styleUrls: ['./form-educationlevel.component.css']
})
export class FormEducationlevelComponent implements OnInit, OnDestroy {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  selectEducationTypes: any = [];

  EducationLevelFormGroup: FormGroup;

  route: any;
  isNew: boolean;
  txtBtn: string;
  classBtn: string;
  id: number;

  phones: any = [];


  /**
   * 
   * @param _formBuilder 
   * @param _router 
   * @param _activeRoute 
   * @param _toastr 
   * @param _apiService 
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _apiService: ApiService
  ) { }

  /**
   * 
   */
  ngOnInit() {
    this.buildForm();
    this.actionRoute();
    this.getEducationTypes();
  }

  /**
   * 
   */
  buildForm(): void {
    this.EducationLevelFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      catEducationType: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    }, {});
  }

  /**
   * 
   */
  actionRoute(): void {
    this.route = this._activeRoute.params.subscribe(params => {
      if (params['id'] == undefined) {
        this.isNew = true;
        this.txtBtn = 'Crear';
        this.classBtn = 'btn btn-primary';
      } else {
        this.isNew = false;
        this.id = + params['id'];
        this.txtBtn = 'Editar';
        this.classBtn = 'btn btn-success';
        this._apiService.getById('settings/educationlevel', this.id).subscribe(educationlevel => {
          this.EducationLevelFormGroup.patchValue(educationlevel.data);
          this.phones = educationlevel.data.phone;
        })
      }
    });
  }

  /**
   * 
   */
  getEducationTypes(): void {
    this._apiService.getSelect('settings/educationtype').subscribe(educationtypes => {
      this.selectEducationTypes = educationtypes.data;
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
  addPhone(): void {
    let phone = this.EducationLevelFormGroup.get('phone').value;

    let index = Object.keys(this.phones).length++;

    let data: any = {};
    data = Object.assign(data, { id: index, phone: phone });

    this.phones.push(data);

    this.EducationLevelFormGroup.get('phone').setValue('');

    this.EducationLevelFormGroup.get('phone').clearValidators();
    this.EducationLevelFormGroup.get('phone').updateValueAndValidity();
  }


  /**
   * 
   * @param item 
   */
  removePhone(item: any): void {
    let index = this.phones.indexOf(item, 0);
    if (index > -1) {
      this.phones.splice(index, 1);
    }

    if (this.phones.length == 0) {
      this.EducationLevelFormGroup.get('phone').setValidators([Validators.required]);
    } else {
      this.EducationLevelFormGroup.get('phone').clearValidators();
    }

    this.EducationLevelFormGroup.get('phone').updateValueAndValidity();
  }

  /**
   * 
   */
  save(): void {
    this.EducationLevelFormGroup.get('phone').setValue(this.phones);

    const data = Object.assign(this.EducationLevelFormGroup.value, { "user": 2 });

    if (this.isNew) {
      this._apiService.create('settings/educationlevel', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/educationlevel']);
      }, error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    } else {
      this._apiService.update('settings/educationlevel', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/educationlevel']);
      }, error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }

}
