import { Component } from '@angular/core';
import { ProtegeService } from './protege.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selected: string = 'Classes';
 constructor (public protegeService: ProtegeService) {}
  public tabsChanged(id: string): void {
    this.selected = id;
  }
}
