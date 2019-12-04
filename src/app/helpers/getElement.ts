/**
 * @description Класс содержащий методы поиска объектов в массиве
 * @author Shepel Andrey
 */
export class GetElement {

  /**
   * @method
   * @description Поиск объекта в массиве по id
   * @param targetArray Массив, в котором производится поиск
   * @param id Идентификатор искомого объекта
   * @param field Название поля, которое нужно в искомом объекте.
   * @variation Если параметр field отсутствует - возвращается объект целиком
   */
  static byId(targetArray: any[], id: number, field?: string): any {
    if (Array.isArray(targetArray)) {
      const result = targetArray.filter(item => Number(item.id) === Number(id))[0];
      return field && result ? result[field] : result;
    }
  }
}
