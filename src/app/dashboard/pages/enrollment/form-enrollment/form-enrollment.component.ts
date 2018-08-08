import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-enrollment',
  templateUrl: './form-enrollment.component.html',
  styleUrls: ['./form-enrollment.component.css']
})
export class FormEnrollmentComponent implements OnInit {

  selectConfig: any = {
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    placeholder: 'Selecciona un tipo'
  };

  // public isCompleted: any;
  // public onStep2Next: any;
  // public onStep3Next: any;
  // public onComplete: any;

  constructor() { }

  ngOnInit() {
  }

  onStep1Next(event){
    console.log(event);
  }

  onStep2Next(event){
    console.log(event);
  }

}
