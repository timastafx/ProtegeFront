import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';
import { IRelationship, IRelationshipType, relationTypes } from '../Interfaces/Data';

interface IAddedOptions {
  mainClass: number;
  secondClass: number;
  role: number;
  relationType: string;
}

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.less']
})
export class RelationshipsComponent implements OnInit {
  items: IRelationship[] = [];
  mainClass: number = null;
  secondClass: number = null;
  role: number = null;
  relationType: string = null;
  relationshipTypes: IRelationshipType[] = relationTypes;

  constructor (public protegeService: ProtegeService) {}

  ngOnInit() {
  }

   /* @event
   * Обработка добавления элемента
   */
  public onAddClick(options: IAddedOptions): void {
    this.protegeService.relationships.push({
      id: Date.now(),
      mainClassId: options.mainClass,
      secondaryClassId: options.secondClass,
      roleId: options.role,
      relationship: options.relationType
    });

    this.zeroize();
  }

  /**
   * @private
   * Обнулить значение селекторов
   */
  private zeroize(): void {
    this.mainClass = null;
    this.secondClass = null;
    this.role = null;
    this.relationType = null;
  }

  /* @event
   * Обработка клика по крестику
   */
  public onDeleteClick(element): void {
    this.items = this.items.filter(item => item.id !== element.id);
  }
}