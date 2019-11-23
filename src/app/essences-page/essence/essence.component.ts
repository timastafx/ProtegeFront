import { Component, OnInit, Input } from '@angular/core';
import { IEssence } from '../../Interfaces/Data';
import { getElement } from '../../helpers/getElement';
import { ProtegeService } from '../../protege.service';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.less']
})
export class EssenceComponent implements OnInit {
  @Input() item: IEssence;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
  }

  getClass(id: number): string {
    return getElement.byId(
      this.protegeService.listClasses, this.item.mainClassId, 'caption');
  }
}