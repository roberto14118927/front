import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { API_MEDIA } from '../../../../../../config/config';
import { formattedDate, converterDate } from '../../../../../../config/date';
import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-institution',
  templateUrl: './form-institution.component.html',
  styleUrls: ['./form-institution.component.css']
})
export class FormInstitutionComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef;

  InstitutionFormGroup : FormGroup;
  
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
    this.InstitutionFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      controlNumber : ['', Validators.required],
      address : ['', Validators.required],
      zipCode : ['', Validators.nullValidator],
      city : ['', Validators.nullValidator],
      state : ['', Validators.nullValidator],
      logo : '',
      businessName : ['', Validators.nullValidator],
      rfc : ['', Validators.nullValidator],
      businessAddress : ['', Validators.nullValidator],
      businessInitDate : ['', Validators.required],
      user: null,
      parendId: null
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
        this._apiService.getById('settings/institution',this.id).subscribe(institution => {
          this.InstitutionFormGroup.patchValue(institution.data);
          this.InstitutionFormGroup.get('logo').setValue('');
          this.InstitutionFormGroup.get('businessInitDate').setValue(converterDate(institution.data.businessInitDate));
          this.isLogoUrl = true;
          this.logoUrl = institution.data.logo == null ? this.logoUrl : API_MEDIA + institution.data.logo;
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
   * @param event 
   */
  onFileChange(event) {
    let reader = new FileReader();

    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.InstitutionFormGroup.get('logo').setValue(file);
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

    input.append('name', this.InstitutionFormGroup.get('name').value);
    input.append('controlNumber', this.InstitutionFormGroup.get('controlNumber').value);
    input.append('address', this.InstitutionFormGroup.get('address').value);
    input.append('zipCode', this.InstitutionFormGroup.get('zipCode').value);
    input.append('city', this.InstitutionFormGroup.get('city').value);
    input.append('state', this.InstitutionFormGroup.get('state').value);
    input.append('logo', this.InstitutionFormGroup.get('logo').value);
    input.append('businessName', this.InstitutionFormGroup.get('businessName').value);
    input.append('rfc', this.InstitutionFormGroup.get('rfc').value);
    input.append('businessAddress', this.InstitutionFormGroup.get('businessAddress').value);
    input.append('businessInitDate', formattedDate(this.InstitutionFormGroup.get('businessInitDate').value));    
    input.append('user', this._auth.user());
    input.append('parentId', '2');

    return input;
  }

  /**
   * 
   */
  save() : void {
    const data = this.prepareSave();

    if(this.isNew) {
      this._apiService.create('settings/institution',data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/institution']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('settings/institution',this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/institution']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
