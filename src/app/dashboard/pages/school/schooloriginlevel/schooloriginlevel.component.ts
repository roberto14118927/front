import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schooloriginlevel',
  templateUrl: './schooloriginlevel.component.html',
  styleUrls: ['./schooloriginlevel.component.css']
})
export class SchooloriginlevelComponent implements OnInit , OnDestroy {
  
  title : string = 'Nivel de escuelas';
  originlevels : any = [];
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

    this._apiService.getAll('school/originlevel').subscribe(originlevels => {
      this.originlevels = originlevels.data;
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
    let index = this.originlevels.indexOf(item, 0);
   
    this._apiService.delete('school/originlevel', id).subscribe(res => {
      console.log(res);
      if (index > -1) {
        this.originlevels.splice(index, 1);
      }
    });
  }
}
