import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { RolePageComponent } from './role-page/role-page.component';
import { ProtegeService } from './protege.service';
import { RelationshipsComponent } from './relationships/relationships.component';
import { RelationItemComponent } from './relationships/relation-item/relation-item.component';
import { EssencesPageComponent } from './essences-page/essences-page.component';
import { EssenceComponent } from './essences-page/essence/essence.component';
import { EssenceClassViewComponent } from './essences-page/essence/essence-class-view/essence-class-view.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    HelloComponent, TabsComponent, ClassesPageComponent, RolePageComponent, RelationshipsComponent, RelationItemComponent, EssencesPageComponent, EssenceComponent, EssenceClassViewComponent, DropDownComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProtegeService]
})
export class AppModule { }
