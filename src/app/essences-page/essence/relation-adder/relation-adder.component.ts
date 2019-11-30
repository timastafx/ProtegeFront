import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProtegeService } from '../../../protege.service';
import { IEssence, IRole } from '../../../Interfaces/Data';

@Component({
  selector: 'app-relation-adder',
  templateUrl: './relation-adder.component.html',
  styleUrls: ['./relation-adder.component.less']
})
export class RelationAdderComponent implements OnInit {
  essence: IEssence;
  role: IRole;
  essenceCaption: string = 'Сущность';
  roleCaption: string = 'Роль';
  adderToggle: boolean = false;

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