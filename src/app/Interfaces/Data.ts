/**
 * Интерфейс сласса
 */
export interface IClass {
  id: number;
  caption: string;
}

/**
 * Интерфейс роли
 */
export interface IRole {
  id: number;
  caption: string;
}

/**
 * Интерфейс отношения между классами
 */
export interface IRelationship {
  id: number;
  mainClassId: number;
  secondaryClassId: number;
  roleId: number,
  relationship: string;
}

/**
 * Интерфейс объекта
 */
export interface IObject {
  id: number;
  caption: string;
  classesId: number[];
  relationships: {
    roleId: number,
    secondaryObject: number
  }[];
} 

/**
 * Интерфейс полного набора данных
 */
export interface IData {
  classes: IClass[];
  roles: IRole[];
  relationships: IRelationship[];
  objects: IObject[];
}

/**
 * Пример реализации интерфейса
 */
const firstCLass: IClass = {
  id: 142524131,
  caption: 'Мужчина'
}

const secondCLass: IClass = {
  id: 452412314,
  caption: 'Женщина'
}

const firstRole: IRole = {
  id: 35234524,
  caption: 'Женат'
}

const firstRelationship: IRelationship = {
  id: 34524235,               
  mainClassId: 142524131,         //firstCLass
  secondaryClassId: 452412314,    //secondCLass
  roleId: 35234524,               //firstRole
  relationship: 'Один к одному'
}

const firstObject: IObject = {
  id: 85434634,
  caption: 'Владимир',
  classesId: [
    142524131                   //firstCLass.id
  ],
  relationships: [
    {
      roleId: 35234524,           //firstRole
      secondaryObject: 945736347  //secondObject
    }
  ]
}

const secondObject: IObject = {
  id: 945736347,
  caption: 'Екатерина',
  classesId: [
    452412314                     //secondCLass.id
  ],
  relationships: []
}

const data: IData = {
  classes: [
    firstCLass,
    secondCLass
  ],
  roles: [
    firstRole
  ],
  relationships: [
    firstRelationship
  ],
  objects: [
    firstObject
  ]
}