import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  visible : boolean;
  public app : any;
  public headerSelected : string;
  public sidenavSelected : string;

  constructor() {
    this.app = {
      layout: {
          isMenuOpened: true,
          isMenuCollapsed: false,
          rtlActived: false,
      }
    };  
  
    this.headerSelected = 'header-default';
    this.sidenavSelected = 'side-nav-dark';
  }

  ngOnInit() {
  }

  /**
   * 
   * @param visible 
   */
  menuCollapsedChange(visible:boolean){
    this.visible = visible;
    this.app.layout.isMenuCollapsed = visible;
  }
}
