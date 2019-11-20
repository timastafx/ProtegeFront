import { Component } from '@angular/core';
import { ProtegeService } from './protege.service';
import { IData } from './interfaces/Data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})
export class AppComponent  {
  selected: string = 'Classes';
  data: IData;
  constructor (public protegeService: ProtegeService) {}

  public tabsChanged(id: string): void {
    this.selected = id;
  }

  public sendRequest(): void {
    alert(JSON.stringify(this.protegeService));
  }
}
