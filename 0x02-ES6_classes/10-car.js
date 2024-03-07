export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('brand must be a string');
    // }
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('motor must be a string');
    // }
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('color must be a string');
    // }
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
