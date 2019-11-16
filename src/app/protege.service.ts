import { Injectable } from '@angular/core';

@Injectable()
export class ProtegeService {
  listClasses: string[] = [];
  listRoles = [];
  role;
  classes;
  relationships = {}
  constructor() { }

}