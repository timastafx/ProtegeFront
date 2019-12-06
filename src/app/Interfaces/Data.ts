/**
 * Интерфейс сласса
 */
export interface IClass {
  /**
   * Уникальный идентификатор
   */
  id: number;
  /**
   * Название класса
   */
  caption: string;
}

/**
 * Интерфейс роли
 */
export interface IRole {
  /**
   * Уникальный идентификатор
   */
  id: number;
  /**
   * Название роли
   */
  caption: string;
}

/**
 * Интерфейс типа отношений
 */
export interface IRelationshipType {
  /**
   * Уникальный идентификатор
   */
  id: number;
  /**
   * Название типа отношений
   */
  caption: string;
}

/**
 * Интерфейс отношения между классами
 */
export interface IRelationship {
  /**
   * Уникальный идентификатор
   */
  id: number;
  /**
   * Идентификатор класса субъекта (Кто совершает действие)
   */
  mainClassId: number;
  /**
   * Идентификатор класса объекта (На кого направленно действие)
   */
  secondaryClassId: number;
  /**
   * Идентификатор роли
   */
  roleId: number;
  /**
   * Идентификатор типа отношений, задается в константе relationTypes
   */
  relationship: number;
}

/**
 * Интерфейс отношения в объекте сущности
 */
export interface IRelationshipEssence {
  /**
   * Уникальный идентификатор
   */
  id: number;
  /**
   * Идентификатор роли
   */
  roleId: number;
  /**
   * Идентификатор сущности субъекта - на оторую направлено действие
   */
  secondaryObjectId: number;
}

/**
 * Интерфейс сущности
 */
export interface IEssence {
  /**
   * Уникальный идентификатор
   */
  id: number;
  /**
   * Наименование сущности
   */
  caption: string;
  /**
   * Идентификатор класса, к которому принадлежит сущность
   */
  classesId: number;
  /**
   * Массив записей имеющихся отношений
   */
  relationships: IRelationshipEssence[];
}

/**
 * Интерфейс полного набора данных
 */
export interface IData {
  /**
   * Массив классов
   */
  classes: IClass[];
  /**
   * Массив ролей
   */
  roles: IRole[];
  /**
   * Массив возможных отношений
   */
  relationships: IRelationship[];
  /**
   * Массив сущностей
   */
  objects: IEssence[];
}

/**
 * Пример реализации интерфейса
 */
const firstCLass: IClass = {
  id: 142524131,
  caption: 'Мужчина'
};

const secondCLass: IClass = {
  id: 452412314,
  caption: 'Женщина'
};

const firstRole: IRole = {
  id: 35234524,
  caption: 'Женат'
};

const firstRelationship: IRelationship = {
  id: 34524235,
  mainClassId: 142524131,         // firstCLass
  secondaryClassId: 452412314,    // secondCLass
  roleId: 35234524,               // firstRole
  relationship: 1                 // Один к одному
};

const firstObject: IEssence = {
  id: 85434634,
  caption: 'Владимир',
  classesId: 142524131,                   // firstCLass.id
  relationships: [
    {
      id: 4362353,
      roleId: 35234524,           // firstRole
      secondaryObjectId: 945736347  // secondObject
    }
  ]
};

const secondObject: IEssence = {
  id: 945736347,
  caption: 'Екатерина',
  classesId: 452412314,                     // secondCLass.id
  relationships: []
};

export const data: IData = {
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
    firstObject,
    secondObject
  ]
};

export const relationTypes: IRelationshipType[] = [{
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
  }];
