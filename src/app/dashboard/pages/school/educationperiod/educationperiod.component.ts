import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-educationperiod',
  templateUrl: './educationperiod.component.html',
  styleUrls: ['./educationperiod.component.css']
})
export class EducationperiodComponent implements OnInit , OnDestroy {
  
  title : string = 'Periodo escolar';
  educationperiods : any = [];
  dtOptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject();

  /**
   * 
   * @param _apiService 
   */
  constructor(
    private _apiService : ApiService
  ) { }

  /**
   * 
   */
  ngOnInit() {
    this.dtOptions = LANGUAGE_ESP_TABLE;

    this._apiService.getAll('school/educationperiod').subscribe(educationperiods => {
      this.educationperiods = educationperiods.data;
      this.dtTrigger.next();
    })
  }

  /**
   * 
   */
  ngOnDestroy() : void {
    this.dtTrigger.unsubscribe();
  }


  /**
   * 
   * @param id 
   */
  delete(id:number, item:any) : void {
    let index = this.educationperiods.indexOf(item, 0);
   
    this._apiService.delete('school/educationperiod', id).subscribe(res => {
      console.log(res);
      if (index > -1) {
        this.educationperiods.splice(index, 1);
      }
    });
  }
}
