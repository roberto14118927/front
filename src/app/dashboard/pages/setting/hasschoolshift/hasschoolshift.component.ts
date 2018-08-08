import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LANGUAGE_ESP_TABLE } from '../../../../../config/config.table';
import { ApiService } from '../../../../services/api/api.service';

import * as moment from 'moment';

@Component({
  selector: 'app-hasschoolshift',
  templateUrl: './hasschoolshift.component.html',
  styleUrls: ['./hasschoolshift.component.css'],
})

export class HasschoolshiftComponent implements OnInit, OnDestroy {
  title: String = 'Has Shift';
  hasschoolshifts: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  /**
*
* @param _apiService
*/

  constructor(
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    this.dtOptions = LANGUAGE_ESP_TABLE;
    this._apiService.getAll('settings/hasschoolshift').subscribe(hasschoolshifts => {
      this.hasschoolshifts = hasschoolshifts.data;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  /**
*
* @param id
*/

  delete(id: number, item: any): void {
    const index = this.hasschoolshifts.indexOf(item, 0);

    this._apiService.delete('settings/schoolshift', id).subscribe(res => {
      if (index > -1) {
        this.hasschoolshifts.splice(index, 1);
      }
    });
  }

  parse(time: any): void {
    time = moment(time, 'h:mm A').format('h:mm A');
    return time;
  }

}
