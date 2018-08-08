import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schoolorigin',
  templateUrl: './schoolorigin.component.html',
  styleUrls: ['./schoolorigin.component.css']
})
export class SchooloriginComponent implements OnInit , OnDestroy {
  
  title : string = 'Escuelas de origen';
  schoolorigins : any = [];
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

    this._apiService.getAll('school/origin').subscribe(schoolorigins => {
      this.schoolorigins = schoolorigins.data;
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
    let index = this.schoolorigins.indexOf(item, 0);
   
    this._apiService.delete('school/origin', id).subscribe(res => {
      if (index > -1) {
        this.schoolorigins.splice(index, 1);
      }
    });
  }
}
