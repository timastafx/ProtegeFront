import { Injectable } from '@angular/core';
import { IRelationship, IRelationshipType, IClass, IRole, IEssence }  from './Interfaces/Data';

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
  relationships: IRelationship[] = [{
    id: 34524235,
    mainClassId: 1,         // firstCLass
    secondaryClassId: 2,    // secondCLass
    roleId: 1,               // firstRole
    relationship: 1
  }];
  essence: IEssence[] = [{
    id: 85434634,
    caption: 'Владимир',
    classesId: [
      1                   // firstCLass.id
    ],
    relationships: [
      {
        roleId: 1,           // firstRole
        secondaryObject: 945736347  // secondObject
      }
    ]
  }, {
    id: 8543462334,
    caption: 'Екатерина',
    classesId: [
      2                   // firstCLass.id
    ],
    relationships: []
  }];

  constructor() { }
}