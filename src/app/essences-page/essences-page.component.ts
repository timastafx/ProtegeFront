import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';

@Component({
  selector: 'app-essences-page',
  templateUrl: './essences-page.component.html',
  styleUrls: ['./essences-page.component.less']
})
export class EssencesPageComponent implements OnInit {
  caption: string = '';
  classId: number = null;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
  }

  addButtonClickHundler(classId: number, caption: string) {
    this.protegeService.essence.push({
      id: Date.now(),
      caption,
      classesId: [
        classId
      ],
      relationships: []
    });
    console.log(this.protegeService);
  }

}