import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  @Input() visible: boolean;

  @Output() menuCollapsed: EventEmitter<boolean> = new EventEmitter();

  /**
   * 
   * @param _router 
   */
  constructor(    
    private _router : Router) {}

  ngOnInit() {
  }

  openMenuCollapsed () {
    this.visible = !this.visible;
    this.menuCollapsed.emit(this.visible);
  }

   /**
   * 
   * 
   * 
   */
  logout() : void {
    localStorage.removeItem('user');
    this._router.navigate(['/']);
  }

}
