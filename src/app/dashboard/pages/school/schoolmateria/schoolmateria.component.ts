import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-schoolmateria',
  templateUrl: './schoolmateria.component.html',
  styleUrls: ['./schoolmateria.component.css']
})
export class SchoolmateriaComponent implements OnInit , OnDestroy {
  
  title : string = 'Materias';
  schoolmaterias : any = [];
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

    this._apiService.getAll('school/materia').subscribe(schoolmaterias => {
      this.schoolmaterias = schoolmaterias.data;
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
    let index = this.schoolmaterias.indexOf(item, 0);
   
    this._apiService.delete('school/materia', id).subscribe(res => {
      if (index > -1) {
        this.schoolmaterias.splice(index, 1);
      }
    });
  }
}
