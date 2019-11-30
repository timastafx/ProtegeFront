import { Component, OnInit, Input } from '@angular/core';
import { IEssence } from '../../Interfaces/Data';
import { getElement } from '../../helpers/getElement';
import { ProtegeService } from '../../protege.service';
import { IRelation } from './relation-adder/Interfaces';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.less']
})

export class EssenceComponent implements OnInit {
  @Input() item: IEssence;
  addToggle: boolean = false;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
  }

  addClassClick() {
    this.addToggle = true;
  }

  classChanged(classItem): void {
    this.item.classesId.push(classItem.id);
    this.addToggle = false;
  }

  relationChanged(item: IRelation): void {
    // console.log(item);
    this.item.relationships.push({
      roleId: item.role.id,
      secondaryObjectId: item.essence.id
    });
  }
}