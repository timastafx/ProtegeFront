import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.css']
})
export class RolePageComponent implements OnInit {

 constructor (public protegeService: ProtegeService) {}
roles = '';
  ngOnInit() {
  }

addToListRoles(roles: string) {
    this.protegeService.listRoles.push(roles);
  }
}