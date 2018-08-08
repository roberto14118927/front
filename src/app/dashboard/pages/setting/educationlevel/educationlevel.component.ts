import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-educationlevel',
  templateUrl: './educationlevel.component.html',
  styleUrls: ['./educationlevel.component.css']
})
export class EducationlevelComponent implements OnInit, OnDestroy {

  title : string = 'Nivel de educación';
  educationlevels : any = [];
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

    this._apiService.getAll('settings/educationlevel').subscribe(educationlevels => {
      this.educationlevels = educationlevels.data;
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
    let index = this.educationlevels.indexOf(item, 0);
   
    this._apiService.delete('settings/educationlevel', id).subscribe(res => {
      if (index > -1) {
        this.educationlevels.splice(index, 1);
      }
    });
  }
}
