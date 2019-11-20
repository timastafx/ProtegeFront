import { Injectable } from '@angular/core';
import { IRelationship, IRelationshipType, IClass, IRole }  from './Interfaces/Data';

@Injectable()
export class ProtegeService {
  listClasses: IClass[] = [{
    id: 1,
    caption: 'Мужчина'
  }, {
    id: 2,
    caption: 'Женщина'
  }];
  listRoles: IRole[] = [{
    id: 1,
    caption: 'Женат'
  }, {
    id: 2,
    caption: 'Замужем'
  }];
  relationships: IRelationship[] = [];

  /**
   * Константа
   */
  relationTypes: IRelationshipType[] = [{
    id: 1,
    caption: 'Один к одному'
  }, {
    id: 2,
    caption: 'Один ко многим'
  }, {
    id: 3,
    caption: 'Много к одному'
  }, {
    id: 4,
    caption: 'Много ко многим'
  }]
  
  constructor() { }
}