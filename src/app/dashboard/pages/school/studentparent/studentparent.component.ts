import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-studentparent',
  templateUrl: './studentparent.component.html',
  styleUrls: ['./studentparent.component.css']
})
export class StudentparentComponent implements OnInit , OnDestroy {
  
  title : string = 'Tutores';
  studentparents : any = [];
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

    this._apiService.getAll('school/studentparent').subscribe(studentparents => {
      this.studentparents = studentparents.data;
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
    let index = this.studentparents.indexOf(item, 0);
   
    this._apiService.delete('school/studentparent', id).subscribe(res => {
      if (index > -1) {
        this.studentparents.splice(index, 1);
      }
    });
  }
}
