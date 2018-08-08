import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-educationtype',
  templateUrl: './educationtype.component.html',
  styleUrls: ['./educationtype.component.css']
})
export class EducationtypeComponent implements OnInit, OnDestroy {

  title : string = 'Tipo de educación';
  educationtypes : any = [];
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

    this._apiService.getAll('settings/educationtype').subscribe(educationtypes => {
      this.educationtypes = educationtypes.data;
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
    let index = this.educationtypes.indexOf(item, 0);
   
    this._apiService.delete('settings/educationtype', id).subscribe(res => {
      if (index > -1) {
        this.educationtypes.splice(index, 1);
      }
    });
  }
}
