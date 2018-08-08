import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  @Input() visible: boolean;

  @Output() menuCollapsed: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  openMenuCollapsed () {
    this.visible = !this.visible;
    this.menuCollapsed.emit(this.visible);
  }
}
