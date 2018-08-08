import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { API_MEDIA } from '../../../../../../config/config';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef;

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona una nivel'
  };

  selectEducationLevels: any = [];

  EducationFormGroup : FormGroup;
  
  route : any;
  isNew : boolean;
  txtBtn : string;
  classBtn : string;
  isLogoUrl : boolean;
  logoUrl : string = 'assets/images/default.jpg';
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
    this.getEducationLevel();
  }

  /**
   * 
   */
  buildForm() {
    this.EducationFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      shortName : ['', Validators.nullValidator],
      catEducationLevel : ['', Validators.nullValidator],
      educationLogo : '',
      acronym : ['', Validators.nullValidator],
      durationMonths : ['', Validators.nullValidator],
      user: null,
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
        this.isLogoUrl = false;
      }else{
        this.isNew = false;
        this.id = + params['id'];
        this.txtBtn = 'Editar';
        this.classBtn = 'btn btn-success';
        this._apiService.getById('settings/education', this.id).subscribe(institution => {
          this.EducationFormGroup.patchValue(institution.data);
          this.EducationFormGroup.get('durationMonths').setValue(institution.data.durationMonths);
          this.EducationFormGroup.get('educationLogo').setValue('');
          this.isLogoUrl = true;
          this.logoUrl = institution.data.logo == null ? this.logoUrl : API_MEDIA + institution.data.logo;
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
   * @param event 
   */
  onFileChange(event) {
    let reader = new FileReader();

    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.EducationFormGroup.get('educationLogo').setValue(file);
      reader.onloadend = () => {
        this.logoUrl = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }

  /**
   * 
   */
  private prepareSave(): any {
    let input = new FormData();

    input.append('name', this.EducationFormGroup.get('name').value);
    input.append('shortName', this.EducationFormGroup.get('shortName').value);
    input.append('catEducationLevel', this.EducationFormGroup.get('catEducationLevel').value);
    input.append('educationLogo', this.EducationFormGroup.get('educationLogo').value);
    input.append('acronym', this.EducationFormGroup.get('acronym').value);
    input.append('durationMonths', this.EducationFormGroup.get('durationMonths').value);
    input.append('user', '2');

    return input;
  }

  /**
   * 
   */
  save() : void {
    const data = this.prepareSave();

    if(this.isNew) {
      this._apiService.create('settings/education', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/education']);
      },error => {
        this._toastr.error('Ocurrio un error al guardar los datos', error);
      })
    }else {
      this._apiService.update('settings/education', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/education']);
      },error => {
        this._toastr.error('Ocurrio un error al guardar los datos', error);
      })
    }
  }  
}
