export interface ICheckOptions {
  array: any[];
  field: string;
  value: any;
  message: string;
}

export class CheckUnique {
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