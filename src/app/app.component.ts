import { Component } from '@angular/core';
import { ProtegeService } from 'src/app/protege.service';
import { IData } from './Interfaces/Data';
import { ITabs } from './Interfaces/Tabs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})

/**
 * @class AppComponent
 * @description Главная траница приложения
 * @author Shepel Andrey
 */
export class AppComponent  {
  selected = 'Essence';
  data: IData;
  tabs: ITabs[] = [{
    id: 'Classes',
    caption: 'Классы'
  }, {
    id: 'Role',
    caption: 'Роли'
  }, {
    id: 'Relationships',
    caption: 'Связи'
  }, {
    id: 'Essence',
    caption: 'Сущности'
  }];

  constructor (public protegeService: ProtegeService) {}

  /**
   * @description Обработка события переключения таба
   * @param id Идентификатор таба, на который произошел переход
   * @return void
   */
  tabsChanged(id: string): void {
    this.selected = id;
  }

  /**
   * @description Обрабработка события нажатия на кнопку Run
   * Производит отправку данных в формате JSON на сервер
   * @return void
   */
  sendRequest(): void {
    alert(JSON.stringify(this.protegeService));
  }
}
