export class getElement {
  static byId(targetArray: any[], id: number, field?: string): any {
    if (Array.isArray(targetArray)) {
      const result = targetArray.filter(item => Number(item.id) === Number(id))[0];
      return field && result? result[field] : result;
    }
  }
}