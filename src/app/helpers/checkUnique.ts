export interface ICheckOptions {
  /**
   * Массив объектов, в котором проводится проверка
   */
  array: any[];
  /**
   * Поле, по которому проводится проверка
   */
  field: string;
  /**
   * Значение, проверяемое на уникальность
   */
  value: any;
  /**
   * Сообщение об ошибке в случае, если запись не уникальна
   */
  message: string;
}

/**
 * @description Класс для проверки уникальности объекта в списке
 * @author Shepel Andrey
 */
export class CheckUnique {

  /**
   * @method
   * @description Проверка на уникальность по одному полю
   * @param options Опции для проверки, реализующие интерфейс ICheckOptions
   */
  static check(options: ICheckOptions): boolean {
    const result = options.array.filter(item => item[options.field] === options.value);
    if (!result.length) {
      return true;
    } else {
      alert(options.message);
      return false;
    }
  }
}
