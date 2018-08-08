import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../../services/api/api.service';

@Component({
  selector: 'app-form-schoolmateria',
  templateUrl: './form-schoolmateria.component.html',
  styleUrls: ['./form-schoolmateria.component.css']
})
export class FormSchoolmateriaComponent implements OnInit, OnDestroy {

  selectConfig : any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  educations : any;
  educationStudyPlans : any;
  catSchoolGrades : any;

  selectConfigT : any = {
    labelField: 'name',
    valueField: 'value',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  selectConfigD = [
    {value:true, name: 'Si'},
    {value:false, name: 'No'}
  ];


  schoolMateriaFormGroup : FormGroup;
  
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
    this.selectEducations();
    this.selectEducationStudyPlans();
    this.selectSchoolGrades();
  }

  /**
   * 
   */
  buildForm() : void  {
    this.schoolMateriaFormGroup = this._formBuilder.group({
      education : ['', Validators.required],
      educationStudyPlan : ['', Validators.required],
      catSchoolGrade : ['', Validators.required],
      name : ['', Validators.required],
      credit : ['', Validators.required],
      minHoursAWeek: ['', Validators.required],
      useLaboratory : ['', Validators.required],
      laboratoryHours : ['', Validators.required],
      onlyTheory : ['', Validators.required],
      percentTheory : ['', Validators.required],
      percentPractice : ['', Validators.required],
      order : ['', Validators.required],
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
        this._apiService.getById('school/materia', this.id).subscribe(materia => {
          this.schoolMateriaFormGroup.patchValue(materia.data);
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

  selectEducations(){
    this._apiService.getSelect('settings/education').subscribe(educations => {
      this.educations = educations.data;
    });
  }

  selectEducationStudyPlans(){
    this._apiService.getSelect('settings/educationstudyplan').subscribe(educationStudyPlans => {
      this.educationStudyPlans = educationStudyPlans.data;
    });
  }

  selectSchoolGrades(){
    this._apiService.getSelect('school/grade').subscribe(schoolgrades => {
      this.catSchoolGrades = schoolgrades.data;
    });
  }

  onChange(value:number, id:number, input:string){
    if(id == 2 && value == 0){
      this.schoolMateriaFormGroup.get([input]).clearValidators();
      this.schoolMateriaFormGroup.get([input]).disable();
    }else {
      this.schoolMateriaFormGroup.get([input]).setValidators(Validators.required);
      this.schoolMateriaFormGroup.get([input]).enable();
    }
    this.schoolMateriaFormGroup.get([input]).updateValueAndValidity();
  }

  /**
   * 
   */
  save() : void {
    const data = this.schoolMateriaFormGroup.value;

    if(this.isNew) {
      this._apiService.create('school/materia', data).subscribe(res => {
        console.log('Create', res);
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/school/materia']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('school/materia', this.id, data).subscribe(res => {
        console.log('Update', res);
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/school/materia']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }

}
