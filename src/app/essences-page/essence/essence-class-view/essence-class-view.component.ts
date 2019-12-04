import { Component, OnInit, Input } from '@angular/core';
import { GetElement } from 'src/app/helpers/getElement';
import { ProtegeService } from 'src/app/protege.service';

@Component({
  selector: 'app-essence-class-view',
  templateUrl: './essence-class-view.component.html',
  styleUrls: ['./essence-class-view.component.less']
})
export class EssenceClassViewComponent implements OnInit {
  classes = '';
  @Input() classId: number;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
    this.classes = GetElement.byId(
      this.protegeService.listClasses, this.classId, 'caption');
  }
}
