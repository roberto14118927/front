import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schoolgrade',
  templateUrl: './schoolgrade.component.html',
  styleUrls: ['./schoolgrade.component.css']
})
export class SchoolgradeComponent implements OnInit , OnDestroy {
  
  title : string = 'Grado escolar';
  schoolgrades : any = [];
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

    this._apiService.getAll('school/grade').subscribe(schoolgrades => {
      this.schoolgrades = schoolgrades.data;
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
    let index = this.schoolgrades.indexOf(item, 0);
   
    this._apiService.delete('school/grade', id).subscribe(res => {
      console.log(res);
      if (index > -1) {
        this.schoolgrades.splice(index, 1);
      }
    });
  }
}
