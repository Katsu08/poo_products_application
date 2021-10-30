class Product {
  static _countProducts = 0;

  constructor(name, price, year) {
    this._name = name;
    this._price = price;
    this._year = year;
    this._id = ++Product._countProducts;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    this._year = year;
  }

  get id() {
    return this._id;
  }
}
