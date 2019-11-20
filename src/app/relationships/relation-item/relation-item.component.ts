import { Component, OnInit, Input } from '@angular/core';
import { IRelationship } from '../../Interfaces/Data';
import { ProtegeService } from '../../protege.service';
import { getElement } from '../../helpers/getElement';

@Component({
  selector: 'app-relation-item',
  templateUrl: './relation-item.component.html',
  styleUrls: ['./relation-item.component.less']
})
export class RelationItemComponent implements OnInit {
  @Input() item: IRelationship;
  mainClassCaption: string;
  secondaryClassCaption: string;
  roleCaption: string;
  relationshipCaption: string;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
    this.mainClassCaption = getElement.byId(
      this.protegeService.listClasses, this.item.mainClassId, 'caption');

    this.secondaryClassCaption = getElement.byId(
      this.protegeService.listClasses, this.item.secondaryClassId, 'caption');

    this.roleCaption = getElement.byId(
      this.protegeService.listRoles, this.item.roleId, 'caption');

    this.relationshipCaption = getElement.byId(
      this.protegeService.relationTypes, this.item.relationship, 'caption');
  }

}