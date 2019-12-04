import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProtegeService } from 'src/app/protege.service';
import { IEssence, IRole } from 'src/app/Interfaces/Data';

@Component({
  selector: 'app-relation-adder',
  templateUrl: './relation-adder.component.html',
  styleUrls: ['./relation-adder.component.less']
})
export class RelationAdderComponent implements OnInit {
  essence: IEssence;
  role: IRole;
  essenceCaption = 'Сущность';
  roleCaption = 'Роль';
  adderToggle = false;

  @Output() itemChanged = new EventEmitter();
  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
  }

  essenceChange(item: IEssence): void {
    this.essence = item;
    this.essenceCaption = item.caption;
  }

  roleChange(item: IRole): void {
    this.role = item;
    this.roleCaption = item.caption;
  }

  relationAdd(): void {
    this.itemChanged.emit({
      role: this.role,
      essence: this.essence
    });
    this.adderToggle = false;
  }
}
