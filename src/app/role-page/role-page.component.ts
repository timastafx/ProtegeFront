import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';
import { CheckUnique, ICheckOptions } from '../helpers/checkUnique';
import { IRole } from '../Interfaces/Data';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.less']
})
export class RolePageComponent implements OnInit {

 constructor (public protegeService: ProtegeService) {}
  
  role = '';
  ngOnInit() {
  }

  addToListRoles(role: string) {
    const uniqueOpts: ICheckOptions = this.getUniqueOptions(role);
    if (role && CheckUnique.check(uniqueOpts)) {
      this.protegeService.listRoles.push({
        id: Date.now(),
        caption: role
      });
      this.role = '';
    }
  }

  private getUniqueOptions(role: string): ICheckOptions {
    return {
      array: this.protegeService.listRoles,
      field: 'caption',
      value: role,
      message: 'Роль с таким названием уже существует'
    }
  }

  removeRoles(role: IRole): void {
    this.protegeService.listRoles =
      this.protegeService.listRoles.filter(item => item.id !== role.id);
  } 
}