import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../services/api/api.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { NativeDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/native-date-time-adapter.class';
import * as moment from 'moment';



// here is the default text string
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
  rangeFromLabel = '';

  /** A label for the range 'to' in picker info */
  rangeToLabel = 'A';

  /** A label for the hour12 button (AM) */
  hour12AMLabel = 'AM';

  /** A label for the hour12 button (PM) */
  hour12PMLabel = 'PM';
}

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'mx' },
    { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
    { provide: OwlDateTimeIntl, useClass: EspIntl },
  ],
})
export class TeacherComponent implements OnInit {
  TeacherFormGroup: FormGroup;
  hourStartP: any = [];
  hourEndP: any = [];
  mondayPush: any = [];
  tuesdayPush: any = [];
  route: any;
  isNew: boolean;
  txtBtn: string;
  classBtn: string;
  id: number;


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

  buildForm(): void {
    this.TeacherFormGroup = this._formBuilder.group({
      mondayInitM: ['', Validators.required],
      mondayEndM: ['', Validators.required],
      mondayInitV: ['', Validators.required],
      mondayEndV: ['', Validators.required],
      tuesdayInitM: ['', Validators.required],
      tuesdayEndM: ['', Validators.required],
      wednesdayInit: ['', Validators.required],
      wednesdayEnd: ['', Validators.required],
      thursdayInit: ['', Validators.required],
      thursdayEnd: ['', Validators.required],
      fridayInit: ['', Validators.required],
      fridayEnd: ['', Validators.required],
      saturdayInit: ['', Validators.required],
      saturdayEnd: ['', Validators.required],
      sundayInit: ['', Validators.required],
      sundayEnd: ['', Validators.required],
    }, {});
  }

  addHour(dayHourInit: any, dayHourEnd: any, dayOfWeek: any): void {
    const dayHourInitT = this.TeacherFormGroup.get(dayHourInit).value; // moment(this.TeacherFormGroup.get(dayHourInit).value).format('LT');
    const dayHourEndT = this.TeacherFormGroup.get(dayHourEnd).value;  //  moment(this.TeacherFormGroup.get(dayHourEnd).value).format('LT');

    const durationInMinutes = '50';
    // const initTime = moment(dayHourInitT, 'HH:mm').add(durationInMinutes, 'minutes').format('HH:mm');
    const initTime = moment(dayHourInitT, 'HH:mm').format('HH:mm a');
    const endTime = moment(dayHourEndT, 'HH:mm').format('HH:mm a');

    // let conta = 0;

    // if (initTime < endTime) {
    //   while (initTime < endTime) {
    //     initTime = moment(initTime, 'HH:mm').format('HH:mm');
    //     let initTimeSum = moment(initTime, 'HH:mm').add(durationInMinutes, 'minutes').format('HH:mm');
    //     console.log(initTime + ' A ' + initTimeSum);
    //     initTime = initTimeSum;
    //     /*if (conta === 0) {
    //       initTime = moment(initTime, 'HH:mm').format('HH:mm');
    //       console.log(initTime);
    //     }
    //     else {
    //       initTime = moment(initTime, 'HH:mm').add(durationInMinutes, 'minutes').format('HH:mm');
    //       console.log(initTime)
    //     }*/

    //     conta = conta + 1;
    //   }
    // } else {
    //   console.log('no');
    // }




    const indexHourInit = Object.keys(this.hourStartP).length++;
    const indexHourEnd = Object.keys(this.hourEndP).length++;


    const data: any = {};

    let dataHourInit: any = {};
    dataHourInit = Object.assign(data, { id: indexHourInit, dayHourInitOut: initTime });

    let dataHourEnd: any = {};
    dataHourEnd = Object.assign(data, { id: indexHourEnd, dayHourEndOut: endTime });


    this.hourStartP.push({ datas: dataHourInit, day: dayOfWeek });
    // this.hourEndP.push({ datas: dataHourEnd, day: dayOfWeek });

    this.TeacherFormGroup.get(dayHourInit).setValue('');

    this.TeacherFormGroup.get(dayHourEnd).setValue('');
    console.log(dayOfWeek);
    switch (dayOfWeek) {
      case 'monday': {
        const mondayClass = new MondayClass(initTime, endTime);
        this.mondayPush.push(mondayClass);
        break;
      }
      case 'tuesday': {
        const tuesdayClass = new TuesdayClass(initTime, endTime);
        this.tuesdayPush.push(tuesdayClass);
        break;
      }
      default: {
        // statements;
        break;
      }
    }
  }

  removeHour(dayHourInit: any, dayHourEnd: any, dayOfWeek: any, item: any): void {
    const indexStart = this.hourStartP.indexOf(item, 0);
    const indexEnd = this.hourEndP.indexOf(item, 0);
    const indexG = this.mondayPush.indexOf(item, 0);

    if (indexStart > -1 || indexEnd > -1) {
      this.hourStartP.splice(indexStart, 1);
      this.hourEndP.splice(indexStart, 1);
      this.mondayPush.splice(indexStart, 1);
      this.tuesdayPush.splice(indexStart, 1);
    }
  }

  actionRoute() {
    this.route = this._activeRoute.params.subscribe(params => {
    });
  }

  save(): void {
    let mark = JSON.stringify(new Times(this.mondayPush, this.tuesdayPush));
    mark = JSON.parse(mark);
    const data = Object.assign({ 'schedule': mark }, { 'user': 2 });
    console.log(data);
  }



}

class MondayClass {
  constructor(
    public initClass: string,
    public endClass: string) { }
}

class TuesdayClass {
  constructor(
    public initClass: string,
    public endClass: string) { }
}

class Times {
  constructor(
    public monday?: MondayClass,
    public tuesday?: TuesdayClass) { }
}

