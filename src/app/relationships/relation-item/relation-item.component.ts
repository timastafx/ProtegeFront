import { Component, OnInit, Input } from '@angular/core';
import { IRelationship, relationTypes } from 'src/app/Interfaces/Data';
import { ProtegeService } from 'src/app/protege.service';
import { GetElement } from 'src/app/helpers/getElement';

@Component({
  selector: 'app-relation-item',
  templateUrl: './relation-item.component.html',
  styleUrls: ['./relation-item.component.less']
})

/**
 * @class RelationItemComponent
 * @description Компонент отображения отношения
 * @author Shepel Andrey
 */
export class RelationItemComponent implements OnInit {
  @Input() item: IRelationship;
  mainClassCaption: string;
  secondaryClassCaption: string;
  roleCaption: string;
  relationshipCaption: string;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
    this.mainClassCaption = GetElement.byId(
      this.protegeService.listClasses, this.item.mainClassId, 'caption');

    this.secondaryClassCaption = GetElement.byId(
      this.protegeService.listClasses, this.item.secondaryClassId, 'caption');

    this.roleCaption = GetElement.byId(
      this.protegeService.listRoles, this.item.roleId, 'caption');

    this.relationshipCaption = GetElement.byId(
      relationTypes, this.item.relationship, 'caption');
  }
}
