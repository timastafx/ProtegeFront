import { Component, OnInit } from '@angular/core';
import { ProtegeService } from 'src/app/protege.service';
import { CheckUnique, ICheckOptions } from '../helpers/checkUnique';
import { IClass } from '../Interfaces/Data';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.less']
})

/**
 * @class ClassesPageComponent
 * @description Страница добовления класса
 * @author Shepel Andrey
 */
export class ClassesPageComponent implements OnInit {
  classes = '';
  constructor (public protegeService: ProtegeService) {}

  ngOnInit() {

  }

  /**
   * @method
   * @description Добовляет новый класс в protegeService
   * @param classes Наименование добовляемого класса
   * @return void
   */
  addToListClasses(classes: string): void {
    const uniqueOpts: ICheckOptions = this.getUniqueOptions(classes);
    if (classes && CheckUnique.check(uniqueOpts)) {
      this.protegeService.listClasses.push({
        id: Date.now(),
        caption: classes
      });
      this.classes = '';
    }
  }

  /**
   * @method
   * @description Подготовка данных для метода CheckUnique.check
   * @param classes Наименование класса, по нему будет происходить проверка уникальности
   * @return ICheckOptions
   */
  private getUniqueOptions(classes: string): ICheckOptions {
    return {
      array: this.protegeService.listClasses,
      field: 'caption',
      value: classes,
      message: 'Класс с таким названием уже существует'
    };
  }

  /**
   * @method
   * @description Удаление класса из protegeService
   * @param classes Удаляемая запись
   * @return void
   */
  removeClasses(classes: IClass): void {
    this.protegeService.listClasses =
      this.protegeService.listClasses.filter(item => item.id !== classes.id);
  }
}
