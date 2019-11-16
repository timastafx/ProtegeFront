import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selected: string = 'Classes';

  public tabsChanged(id: string): void {
    this.selected = id;
  }
}
