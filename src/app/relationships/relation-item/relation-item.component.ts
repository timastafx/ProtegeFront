import { Component, OnInit, Input } from '@angular/core';
import { IRelationship } from '../../Interfaces/Data';

@Component({
  selector: 'app-relation-item',
  templateUrl: './relation-item.component.html',
  styleUrls: ['./relation-item.component.less']
})
export class RelationItemComponent implements OnInit {
  @Input() item: IRelationship;

  constructor() { }

  ngOnInit() {
  }

}