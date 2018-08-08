import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { API_MEDIA } from '../../../../../../config/config';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-documents',
  templateUrl: './form-documents.component.html',
  styleUrls: ['./form-documents.component.css']
})
export class FormDocumentsComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef;

  DocumentsFormGroup : FormGroup;
  
  route : any;
  isNew : boolean;
  txtBtn : string;
  classBtn : string;
  // isLogoUrl : boolean;
  // logoUrl : string = 'assets/images/default.jpg';
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
  }

  /**
   * 
   */
  buildForm() {
    this.DocumentsFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      tags : ['', Validators.required],
      url : '',
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
      }else{
        this.isNew = false;
        this.id = + params['id'];
        this.txtBtn = 'Editar';
        this.classBtn = 'btn btn-success';
        this._apiService.getById('drive/documents', this.id).subscribe(document => {
          this.DocumentsFormGroup.patchValue(document.data);
          this.DocumentsFormGroup.get('url').setValue('');
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
    //let reader = new FileReader();

    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.DocumentsFormGroup.get('url').setValue(file);
      // reader.onloadend = () => {
      //   this.logoUrl = reader.result;
      // }
      //reader.readAsDataURL(file);
    }
  }

  /**
   * 
   */
  private prepareSave(): any {
    let input = new FormData();

    input.append('name', this.DocumentsFormGroup.get('name').value);
    input.append('tags', this.DocumentsFormGroup.get('tags').value);
    input.append('url', this.DocumentsFormGroup.get('url').value);
    input.append('user', '2');

    return input;
  }

  /**
   * 
   */
  save() : void {
    const data = this.prepareSave();

    if(this.isNew) {
      this._apiService.create('drive/documents', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/drive/documents']);
      },error => {
        this._toastr.error('Ocurrio un error al guardar los datos', error);
      })
    }else {
      this._apiService.update('drive/documents', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/drive/documents']);
      },error => {
        this._toastr.error('Ocurrio un error al guardar los datos', error);
      })
    }
  }  
}
