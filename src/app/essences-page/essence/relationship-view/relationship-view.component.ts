import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRelationship, IRole } from '../../../Interfaces/Data';
import { getElement } from '../../../helpers/getElement';
import { ProtegeService } from '../../../protege.service';
import { IRelation } from '../relation-adder/Interfaces';

@Component({
  selector: 'app-relationship-view',
  templateUrl: './relationship-view.component.html',
  styleUrls: ['./relationship-view.component.less']
})
export class RelationshipViewComponent implements OnInit {
  @Input() relationship: IRelation;
  @Output() deleteItem = new EventEmitter()
  role: IRole;
  relation: IRelationship;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
    console.log(this.relationship);
    this.role = this.getRole();
    this.relation = this.getRelation();
    console.log(this.role, this.relation);
  }

  private getRole(): IRole {
    if (this.relationship.roleId || this.relationship.roleId === 0) {
      return getElement.byId(this.protegeService.listRoles, this.relationship.roleId);
    } else {
      return {
        id: -1,
        caption: ''
      }
    }
  }

  private getRelation(): IRelation {
    if (this.relationship.secondaryObjectId || this.relationship.secondaryObjectId === 0) {
      return getElement.byId(this.protegeService.essence, this.relationship.secondaryObjectId);
    } else {
      return {
        id: -1,
        caption: ''
      }
    }
  }

  deleteRelation(): void {
    console.log(this.relation);
  }
}