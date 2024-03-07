// Import Car from 10-car.js.

// Implement a class named EVCar that extends the Car class:

// Constructor attributes:
// brand (String)
// motor (String)
// color (String)
// range (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('color must be a string');
    // }
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
