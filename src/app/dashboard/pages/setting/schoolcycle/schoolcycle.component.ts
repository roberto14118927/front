import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schoolcycle',
  templateUrl: './schoolcycle.component.html',
  styleUrls: ['./schoolcycle.component.css']
})
export class SchoolcycleComponent implements OnInit, OnDestroy {

  title : string = 'Ciclo escolar';
  schoolcycles : any = [];
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

    this._apiService.getAll('settings/schoolcycle').subscribe(schoolcycles => {
      this.schoolcycles = schoolcycles.data;
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
    let index = this.schoolcycles.indexOf(item, 0);
   
    this._apiService.delete('settings/schoolcycle', id).subscribe(res => {
      if (index > -1) {
        this.schoolcycles.splice(index, 1);
      }
    });
  }
}
