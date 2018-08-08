import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-groupmateriastudent',
  templateUrl: './form-groupmateriastudent.component.html',
  styleUrls: ['./form-groupmateriastudent.component.css']
})
export class FormGroupmateriastudentComponent implements OnInit, OnDestroy {

  selectConfig : any = {
    labelField: 'acronym',
    valueField: 'id',
    searchField: ['acronym'],
    placeholder: 'Selecciona un tipo'
  };

  selectConfigMateria : any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  selectConfigPartial : any = {
    labelField: 'name',
    valueField: 'value',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  schoolGroups : any;
  schoolMaterias : any;

  partials = [
    {value:true, name: 'Si'},
    {value:false, name: 'No'}
  ]

  groupMateriaStudentFormGroup : FormGroup;
  
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
    this.selectSchoolGroups();
    this.selectSchoolMaterias();
  }

  /**
   * 
   */
  buildForm() : void  {
    this.groupMateriaStudentFormGroup = this._formBuilder.group({
      schoolGroup : ['', Validators.required],
      schoolMateria : ['', Validators.required],
      isPartial : ['', Validators.required],
      scoreNumber : ['', Validators.required],
      theoryScore : [0, Validators.required],
      practiceScore: [0, Validators.required],
      finalScore : ['', Validators.required],
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
        this._apiService.getById('school/groupmateriastudent', this.id).subscribe(groupmateriastudent => {
          this.groupMateriaStudentFormGroup.patchValue(groupmateriastudent.data);
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

  selectSchoolGroups(){
    this._apiService.getSelectByParams('school/group', 'id,acronym').subscribe(groups => {
      this.schoolGroups = groups.data;
    });
  }

  selectSchoolMaterias(){
    this._apiService.getSelect('school/materia').subscribe(materias => {
      this.schoolMaterias = materias.data;
    });
  }

  /**
   * 
   */
  save() : void {
    const data = this.groupMateriaStudentFormGroup.value;

    if(this.isNew) {
      this._apiService.create('school/groupmateriastudent', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/school/groupmateriastudent']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('school/groupmateriastudent', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/school/groupmateriastudent']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }

}
