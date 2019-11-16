import { Injectable } from '@angular/core';

@Injectable()
export class ProtegeService {
  listClasses: {
    id: number,
    caption: string
  }[] = [];
  listRoles = [];
  role;
  classes;
  relationships = {}
  constructor() { }

}