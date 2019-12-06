import { Component, OnInit, Input } from '@angular/core';
import {IEssence, IRelationshipEssence} from 'src/app/Interfaces/Data';
import { ProtegeService } from 'src/app/protege.service';
import { IRelation } from './relation-adder/Interfaces';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.less']
})

/**
 * @class EssenceComponent
 * @description Компонент отображения сущности
 * @author Shepel Andrey
 */
export class EssenceComponent implements OnInit {
  @Input() item: IEssence;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
  }

  /**
   * @method
   * @description обработка добавления нового объекта отношения
   * @param item Добовляемый объект
   */
  relationChanged(item: IRelation): void {
    this.item.relationships.push({
      id: Date.now(),
      roleId: item.role.id,
      secondaryObjectId: item.essence.id
    });
  }

  relationDelete(item: IRelationshipEssence): void {
    this.item.relationships = this.item.relationships.filter(relation => relation.id !== item.id);
  }
}
