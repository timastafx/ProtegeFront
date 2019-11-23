import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITabs } from '../Interfaces/Tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})

export class TabsComponent implements OnInit {
  checkedId: number | string;

  @Input() selected: number | string;
  @Input() tabs: ITabs[];
  @Output() tabsChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.checkedId = this.selected;
  }

  onClickHandler(id: string) {
    this.checkedId = id;
    this.tabsChanged.emit(this.checkedId);
  }
}