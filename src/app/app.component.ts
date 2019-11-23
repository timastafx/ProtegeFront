import { Component } from '@angular/core';
import { ProtegeService } from './protege.service';
import { IData } from './Interfaces/Data';
import { ITabs } from './Interfaces/Tabs;'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})
export class AppComponent  {
  selected: string = 'Essence';
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

  public tabsChanged(id: string): void {
    this.selected = id;
  }

  public sendRequest(): void {
    alert(JSON.stringify(this.protegeService));
  }
}
