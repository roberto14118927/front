import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schoolperiod',
  templateUrl: './schoolperiod.component.html',
  styleUrls: ['./schoolperiod.component.css']
})
export class SchoolperiodComponent implements OnInit, OnDestroy {

  title : string = 'Periodo escolar';
  schoolperiods : any = [];
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

    this._apiService.getAll('settings/schoolperiod').subscribe(schoolperiods => {
      this.schoolperiods = schoolperiods.data;
      this.dtTrigger.next();
    })
  }

  /**
   * 
   */
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

      /**
   * 
   * @param id 
   */
  delete(id:number, item:any) : void {
    let index = this.schoolperiods.indexOf(item, 0);
   
    this._apiService.delete('settings/schoolperiod', id).subscribe(res => {
      if (index > -1) {
        this.schoolperiods.splice(index, 1);
      }
    });
  }
}
