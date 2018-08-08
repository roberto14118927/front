import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../../../services/api/api.service';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';

import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { NativeDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/native-date-time-adapter.class';
import * as moment from 'moment';

export class EspIntl extends OwlDateTimeIntl {
  /** A label for the up second button (used by screen readers).  */
  upSecondLabel = '';

  /** A label for the down second button (used by screen readers).  */
  downSecondLabel = '';

  /** A label for the up minute button (used by screen readers).  */
  upMinuteLabel = '';

  /** A label for the down minute button (used by screen readers).  */
  downMinuteLabel = '';

  /** A label for the up hour button (used by screen readers).  */
  upHourLabel = '';

  /** A label for the down hour button (used by screen readers).  */
  downHourLabel = '';

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = '';

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = '';

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = '';

  /** A label for the next year button (used by screen readers). */
  nextYearLabel = '';

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = '';

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = '';

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = '';

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel = '';

  /** A label for the cancel button */
  cancelBtnLabel = 'Cancelar';

  /** A label for the set button */
  setBtnLabel = 'Aceptar';

  /** A label for the range 'from' in picker info */
  // rangeFromLabel = '';

  /** A label for the range 'to' in picker info */
  rangeToLabel = 'A';

  /** A label for the hour12 button (AM) */
  hour12AMLabel = 'AM';

  /** A label for the hour12 button (PM) */
  hour12PMLabel = 'PM';
}

@Component({
  selector: 'app-form-schoolshift',
  templateUrl: './form-schoolshift.component.html',
  styleUrls: ['./form-schoolshift.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'mx' },
    { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
    { provide: OwlDateTimeIntl, useClass: EspIntl },
  ],
})
export class FormSchoolshiftComponent implements OnInit, OnDestroy {

  SchoolshiftFormGroup: FormGroup;
  route: any;
  isNew: boolean;
  txtBtn: string;
  classBtn: string;
  id: number;

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
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _apiService: ApiService,
    private _auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.actionRoute();
  }
  buildForm() {
    this.SchoolshiftFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      initTime: ['', Validators.required],
      endTime: ['', Validators.required],
      user: null
    }, {});
  }

  actionRoute() {
    this.route = this._activeRoute.params.subscribe(params => {
      if (params['id'] === undefined) {
        this.isNew = true;
        this.txtBtn = 'Crear';
        this.classBtn = 'btn btn-primary';
      } else {
        this.isNew = false;
        this.id = + params['id'];
        this.txtBtn = 'Editar';
        this.classBtn = 'btn btn-success';
        this._apiService.getById('settings/schoolshift', this.id).subscribe(schoolshift => {

          const initTime = new Date('1111-01-01 ' + schoolshift.data.initTime);
          const endTime = new Date('1111-01-01 ' + schoolshift.data.endTime);
          const name = schoolshift.data.name;

          this.SchoolshiftFormGroup.get('initTime').setValue(initTime);
          this.SchoolshiftFormGroup.get('endTime').setValue(endTime);
          this.SchoolshiftFormGroup.get('name').setValue(name);
        });
      }
    });
  }

  ngOnDestroy() {
    this.route.unsubscribe();
  }

  private prepareSave(): any {
    const input = new FormData();

    const initTime = moment(this.SchoolshiftFormGroup.get('initTime').value, 'HH:mm').format('HH:mm');
    const endTime = moment(this.SchoolshiftFormGroup.get('endTime').value, 'HH:mm').format('HH:mm');

    input.append('name', this.SchoolshiftFormGroup.get('name').value);
    input.append('initTime', initTime);
    input.append('endTime', endTime);
    input.append('user', this._auth.user());

    return input;
  }

  save(): void {
    const data = this.prepareSave();
    console.log(data);

    if (this.isNew) {
      this._apiService.create('settings/schoolshift', data).subscribe(res => {
        this._toastr.success('Registro guardado correctamente');
        this._router.navigate(['dashboard/settings/schoolshift']);
      }, error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      });
    } else {
      this._apiService.update('settings/schoolshift', this.id, data).subscribe(res => {
        this._toastr.success('Registro modificado correctamente');
        this._router.navigate(['dashboard/settings/schoolshift']);
      }, error => {
        console.log('Error', error);
        this._toastr.error('Ocurrio un error al guardar los datos');
      });
    }
  }

}
