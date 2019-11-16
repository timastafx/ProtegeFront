import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.less']
})
export class RelationshipsComponent implements OnInit {
items;
constructor (public protegeService: ProtegeService) {}

  ngOnInit() {
  }

   /* @event
   * Обработка клика
   */
  public onAddClick(): void {
    this.items.push({
      name: '',
      cost: null,
      id: Date.now()
    });
  }

  /* @event
   * Обработка клика по крестику
   */
  public onDeleteClick(element): void {
    this.items = this.items.filter(item => item.id !== element.id);
  }


}