import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { RolePageComponent } from './role-page/role-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TabsComponent, ClassesPageComponent, RolePageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
