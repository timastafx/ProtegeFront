import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetElement } from '../helpers/getElement';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.less']
})

/**
 * @class DropDownComponent
 * @description Компонент для выбора записи из выпадающего списка
 * @author Shepel Andrey
 */
export class DropDownComponent implements OnInit {
  @Input() list: {
    id: number;
    caption: string;
  }[];
  @Input() caption: string;
  @Output() itemChanged = new EventEmitter();

  addToggle = false;
  itemId: number;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @method
   * @description Обработка клика по кнопке добавления
   * @return void
   */
  addButtonClick(): void {
    if (this.itemId || this.itemId === 0) {
      this.itemChanged.emit(GetElement.byId(this.list, this.itemId));
    } else {
      alert('Нужно выбрать запись!');
    }
    this.addToggle = false;
  }
}
