import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-educationarea',
  templateUrl: './educationarea.component.html',
  styleUrls: ['./educationarea.component.css']
})
export class EducationareaComponent implements OnInit, OnDestroy {

  title : string = 'Área de educación';
  educationareas : any = [];
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

    this._apiService.getAll('settings/educationarea').subscribe(educationareas => {
      this.educationareas = educationareas.data;
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
    let index = this.educationareas.indexOf(item, 0);
   
    this._apiService.delete('settings/educationarea', id).subscribe(res => {
      if (index > -1) {
        this.educationareas.splice(index, 1);
      }
    });
  }
}
