import { Injectable } from '@angular/core';
import { IRelationship, IClass, IRole }  from './Interfaces/Data';

@Injectable()
export class ProtegeService {
  listClasses: IClass[] = [];
  listRoles: IRole[] = [];
  relationships: IRelationship[] = [];
  
  constructor() { }
}