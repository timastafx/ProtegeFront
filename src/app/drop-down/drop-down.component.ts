import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getElement } from '../helpers/getElement';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.less']
})
export class DropDownComponent implements OnInit {
  @Input() list: {
    id: number;
    caption: string;
  };
  @Input() caption: string;
  @Output() itemChanged = new EventEmitter();

  addToggle: boolean = false;
  itemId: number;
  constructor() { }

  ngOnInit() {
  }

  addButtonClick(): void {
    if (this.itemId || this.itemId === 0) {
      this.itemChanged.emit(getElement.byId(this.list, this.itemId));
    } else {
      alert('Нужно выбрать запись!')
    }
    this.addToggle = false;
  }
}