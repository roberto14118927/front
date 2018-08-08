import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schoolgroup',
  templateUrl: './schoolgroup.component.html',
  styleUrls: ['./schoolgroup.component.css']
})
export class SchoolgroupComponent implements OnInit , OnDestroy {
  
  title : string = 'Grupo escolar';
  schoolgroups : any = [];
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

    this._apiService.getAll('school/group').subscribe(schoolgroups => {
      this.schoolgroups = schoolgroups.data;
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
    let index = this.schoolgroups.indexOf(item, 0);
   
    this._apiService.delete('school/group', id).subscribe(res => {
      console.log(res);
      if (index > -1) {
        this.schoolgroups.splice(index, 1);
      }
    });
  }
}
