import { Component, OnInit } from '@angular/core';
import { ProtegeService } from 'src/app/protege.service';
import { CheckUnique, ICheckOptions } from '../helpers/checkUnique';
import { IRole } from '../Interfaces/Data';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.less']
})

/**
 * @class RolePageComponent
 * @description Страница добовления ролей
 * @author Shepel Andrey
 */
export class RolePageComponent implements OnInit {

 constructor (public protegeService: ProtegeService) {}
  role = '';

  ngOnInit() {
  }

  /**
   * @method
   * @description Добовляет новую роль в protegeService
   * @param role Наименование добовляемой роли
   * @return void
   */
  addToListRoles(role: string): void {
    const uniqueOpts: ICheckOptions = this.getUniqueOptions(role);
    if (role && CheckUnique.check(uniqueOpts)) {
      this.protegeService.listRoles.push({
        id: Date.now(),
        caption: role
      });
      this.role = '';
    }
  }

  /**
   * @method
   * @description Подготовка данных для метода CheckUnique.check
   * @param role Наименование роли, по нему будет происходить проверка уникальности
   * @return ICheckOptions
   */
  private getUniqueOptions(role: string): ICheckOptions {
    return {
      array: this.protegeService.listRoles,
      field: 'caption',
      value: role,
      message: 'Роль с таким названием уже существует'
    };
  }

  /**
   * @method
   * @description Удаление роли из protegeService
   * @param role Удаляемая запись
   * @return void
   */
  removeRoles(role: IRole): void {
    this.protegeService.listRoles =
      this.protegeService.listRoles.filter(item => item.id !== role.id);
  }
}
