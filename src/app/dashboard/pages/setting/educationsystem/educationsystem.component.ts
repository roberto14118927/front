import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-educationsystem',
  templateUrl: './educationsystem.component.html',
  styleUrls: ['./educationsystem.component.css']
})
export class EducationsystemComponent implements OnInit, OnDestroy {

  title : string = 'Sistema de educación';
  educationsystems : any = [];
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

    this._apiService.getAll('settings/educationsystem').subscribe(educationsystems => {
      this.educationsystems = educationsystems.data;
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
    let index = this.educationsystems.indexOf(item, 0);
   
    this._apiService.delete('settings/educationsystem', id).subscribe(res => {
      if (index > -1) {
        this.educationsystems.splice(index, 1);
      }
    });
  }
}
