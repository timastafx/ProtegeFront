import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  checkedId: string = 'Classes';
  @Output() tabsChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickHandler(id: string) {
    this.checkedId = id;
    this.tabsChanged.emit(this.checkedId);
  }
}