import { Component, OnInit } from '@angular/core';
import { ProtegeService } from 'src/app/protege.service';

@Component({
  selector: 'app-essences-page',
  templateUrl: './essences-page.component.html',
  styleUrls: ['./essences-page.component.less']
})

/**
 * @class EssencesPageComponent
 * @description Страница добовления сущностей
 * @author Shepel Andrey
 */
export class EssencesPageComponent implements OnInit {
  caption = '';
  classId: number = null;

  constructor(public protegeService: ProtegeService) { }

  ngOnInit() {
  }

  /**
   * @method
   * @description Добавление новой сущности
   * @param classId Идентификатор уласса, к которому принадлежит сущность
   * @param caption Наименование сущности
   */
  addButtonClickHandler(classId: number, caption: string) {
    this.protegeService.essence.push({
      id: Date.now(),
      caption,
      classesId: classId,
      relationships: []
    });
    console.log(this.protegeService);
  }
}
