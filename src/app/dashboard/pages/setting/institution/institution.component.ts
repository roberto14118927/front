import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';
import { API_MEDIA } from '../../../../../config/config';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit, OnDestroy {
  
  title : string = 'Institución';
  institutions : any = [];
  dtOptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject();
  api_media = API_MEDIA;

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

    this._apiService.getAll('settings/institution').subscribe(institutions => {
      this.institutions = institutions.data;
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
    let index = this.institutions.indexOf(item, 0);
   
    this._apiService.delete('settings/institution', id).subscribe(res => {
      if (index > -1) {
        this.institutions.splice(index, 1);
      }
    });
  }
}
