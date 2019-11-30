import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relationship-view',
  templateUrl: './relationship-view.component.html',
  styleUrls: ['./relationship-view.component.less']
})
export class RelationshipViewComponent implements OnInit {
  @Input() relationship: string;

  constructor() { }

  ngOnInit() {
    console.log(this.relationship);
    
  }

}