import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-groupmateriastudent',
  templateUrl: './groupmateriastudent.component.html',
  styleUrls: ['./groupmateriastudent.component.css']
})
export class GroupmateriastudentComponent implements OnInit , OnDestroy {
  
  title : string = 'Grupo de materias';
  groupmateriastudents : any = [];
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

    this._apiService.getAll('school/groupmateriastudent').subscribe(groupmateriastudents => {
      this.groupmateriastudents = groupmateriastudents.data;
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
    let index = this.groupmateriastudents.indexOf(item, 0);
   
    this._apiService.delete('school/groupmateriastudent', id).subscribe(res => {
      console.log(res);
      if (index > -1) {
        this.groupmateriastudents.splice(index, 1);
      }
    });
  }
}
