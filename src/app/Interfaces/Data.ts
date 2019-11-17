export interface IClass {
  id: number,
  caption: string
}

export interface IRole {
  id: number,
  caption: string
}

export interface IRelationship {
  id: number,
  mainClass: IClass,
  secondaryClass: IClass,
  relationship: string
}
