import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEssence, IRelationshipEssence, IRole} from 'src/app/Interfaces/Data';
import { GetElement } from 'src/app/helpers/getElement';
import { ProtegeService } from 'src/app/protege.service';

@Component({
  selector: 'app-relationship-view',
  templateUrl: './relationship-view.component.html',
  styleUrls: ['./relationship-view.component.less']
})

/**
 * @class RelationshipViewComponent
 * @description Компонент отображения звязей у сущностей
 * @author Shepel Andrey
 */
export class RelationshipViewComponent implements OnInit {
  @Input() relationship: IRelationshipEssence;
  @Output() deleteItem = new EventEmitter();
  role: IRole;
  relationObject: IEssence;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
    this.role = this.getRole();
    this.relationObject = this.getRelation();
  }

  /**
   * @mathod
   * @description Получение объекта используемой роли
   */
  private getRole(): IRole {
    if (this.relationship.roleId || this.relationship.roleId === 0) {
      return GetElement.byId(this.protegeService.listRoles, this.relationship.roleId);
    } else {
      return {
        id: -1,
        caption: ''
      };
    }
  }

  /**
   * @method
   * @description Получение объекта сущности, на которую направлено действие
   */
  private getRelation(): IEssence {
    if (this.relationship.secondaryObjectId || this.relationship.secondaryObjectId === 0) {
      return GetElement.byId(this.protegeService.essence, this.relationship.secondaryObjectId);
    } else {
      return {
        id: -1,
        caption: '',
        classesId: -1,
        relationships: []
      };
    }
  }

  /**
   * @method
   * @description Обработка события удаления записи
   */
  deleteRelation(): void {
    this.deleteItem.emit(this.relationship);
  }
}
