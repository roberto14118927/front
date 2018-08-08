import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-educationstudyplan',
  templateUrl: './educationstudyplan.component.html',
  styleUrls: ['./educationstudyplan.component.css']
})
export class EducationstudyplanComponent implements OnInit, OnDestroy {

  title : string = 'Plan de estudio';
  educationstudyplans : any = [];
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

    this._apiService.getAll('settings/educationstudyplan').subscribe(educationstudyplans => {
      this.educationstudyplans = educationstudyplans.data;
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
   * @param item 
   */
  delete(id:number, item:any) : void {
    let index = this.educationstudyplans.indexOf(item, 0);
   
    this._apiService.delete('settings/educationstudyplan', id).subscribe(res => {
      if (index > -1) {
        this.educationstudyplans.splice(index, 1);
      }
    });
  }
}
