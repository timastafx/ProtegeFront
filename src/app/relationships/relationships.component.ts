import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';
import { IRelationship } from '../Interfaces/Data';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.less']
})
export class RelationshipsComponent implements OnInit {
  items: IRelationship[] = [];

  constructor (public protegeService: ProtegeService) {}

  ngOnInit() {
  }

   /* @event
   * Обработка добавления элемента
   */
  public onAddClick(): void {
    this.items.push({
      id: Date.now(),
      mainClass: null,
      secondaryClass: null,
      relationship: null,
    });

    this.protegeService.relationships = this.items;
  }

  /* @event
   * Обработка клика по крестику
   */
  public onDeleteClick(element): void {
    this.items = this.items.filter(item => item.id !== element.id);
  }
}