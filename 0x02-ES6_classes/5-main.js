import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return `evacuate the ${this.sqft} square foot building`;
  }
}

try {
  const obj = new TestBuilding(200);
  console.log(obj.evacuationWarningMessage());
} catch (err) {
  console.log(err);
}
