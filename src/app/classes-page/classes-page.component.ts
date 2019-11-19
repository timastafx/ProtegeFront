import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';
import { CheckUnique, ICheckOptions } from '../helpers/checkUnique';
import { IClass } from '../Interfaces/Data';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.less']
})
export class ClassesPageComponent implements OnInit {
  classes = '';
  constructor (public protegeService: ProtegeService) {}

  ngOnInit() {

  }

  addToListClasses(classes: string) {
    const uniqueOpts: ICheckOptions = this.getUniqueOptions(classes);
    if (classes && CheckUnique.check(uniqueOpts)) {
      this.protegeService.listClasses.push({
        id: Date.now(),
        caption: classes
      });
      this.classes = '';
    } 
  }

  private getUniqueOptions(classes: string): ICheckOptions {
    return {
      array: this.protegeService.listClasses,
      field: 'caption',
      value: classes,
      message: 'Класс с таким названием уже существует'
    }
  }

  removeClasses(classes: IClass): void {
    this.protegeService.listClasses =
      this.protegeService.listClasses.filter(item => item.id !== classes.id);
  } 
}