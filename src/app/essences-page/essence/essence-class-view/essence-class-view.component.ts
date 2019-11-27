import { Component, OnInit, Input } from '@angular/core';
import { getElement } from '../../../helpers/getElement';
import { ProtegeService } from '../../../protege.service';

@Component({
  selector: 'app-essence-class-view',
  templateUrl: './essence-class-view.component.html',
  styleUrls: ['./essence-class-view.component.less']
})
export class EssenceClassViewComponent implements OnInit {
  classes: string = '';
  @Input() classId: number;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
    this.classes = getElement.byId(
      this.protegeService.listClasses, this.classId, 'caption');
  }
}