export interface IClass {
  id: number,
  caption: string
}

export interface IRole {
  id: number,
  caption: string
}

export interface IRelationship {
  mainClass: IClass,
  secondaryClass: IClass,
  relationship: string
}
