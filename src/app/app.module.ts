import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { RolePageComponent } from './role-page/role-page.component';
import { ProtegeService } from 'src/app/protege.service';
import { RelationshipsComponent } from './relationships/relationships.component';
import { RelationItemComponent } from './relationships/relation-item/relation-item.component';
import { EssencesPageComponent } from './essences-page/essences-page.component';
import { EssenceComponent } from './essences-page/essence/essence.component';
import { EssenceClassViewComponent } from './essences-page/essence/essence-class-view/essence-class-view.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { RelationAdderComponent } from './essences-page/essence/relation-adder/relation-adder.component';
import { RelationshipViewComponent } from './essences-page/essence/relationship-view/relationship-view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    TabsComponent,
    ClassesPageComponent,
    RolePageComponent,
    RelationshipsComponent,
    RelationItemComponent,
    EssencesPageComponent,
    EssenceComponent,
    EssenceClassViewComponent,
    DropDownComponent,
    RelationAdderComponent,
    RelationshipViewComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ProtegeService]
})
export class AppModule { }
