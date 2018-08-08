import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-form-educationperiod',
  templateUrl: './form-educationperiod.component.html',
  styleUrls: ['./form-educationperiod.component.css']
})
export class FormEducationperiodComponent implements OnInit, OnDestroy {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  educactions: any = [];
  catEducationSystems: any = [];
  catSchoolShifts: any = [];
  catSchoolCycles: any = [];
  catSchoolPeriods: any = [];
  educationStudyPlans: any = [];


  educationPeriodFormGroup : FormGroup;
  
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
    this.getSelect('settings/education', 'educactions');
    this.getSelect('settings/educationsystem', 'catEducationSystems');
    this.getSelect('settings/schoolshift', 'catSchoolShifts');
    this.getSelect('settings/schoolcycle', 'catSchoolCycles');
    this.getSelect('settings/schoolperiod', 'catSchoolPeriods');
    this.getSelect('settings/educationstudyplan', 'educationStudyPlans');
  }

  /**
   * 
   */
  buildForm() {
    this.educationPeriodFormGroup = this._formBuilder.group({
      education : ['', Validators.required],
      catEducationSystem : ['', Validators.required],
      catSchoolShift : ['', Validators.required],
      catSchoolCycle : ['', Validators.required],
      catSchoolPeriod : ['', Validators.required],
      educationStudyPlan : ['', Validators.required],
      generation : ['', Validators.required],
      period : ['', Validators.required],
      user: 2,
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
        this._apiService.getById('school/educationperiod', this.id).subscribe(educationperiod => {
          this.educationPeriodFormGroup.patchValue(educationperiod.data);
        })
      }
    });
  }

  /**
   * 
   */
  getSelect(endPoint:string, arrayName:string) {
    this._apiService.getSelect(endPoint).subscribe(select => {
      this[arrayName] = select.data;
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
    const data = this.educationPeriodFormGroup.value;

    if(this.isNew) {
      this._apiService.create('school/educationperiod', data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/school/educationperiod']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }else {
      this._apiService.update('school/educationperiod', this.id, data).subscribe(res => {
        console.log(res)
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/school/educationperiod']);
      },error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      })
    }
  }
}
