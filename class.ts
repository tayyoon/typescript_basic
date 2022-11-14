// 추상 class abstract
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

class Bmw2 extends Car {
  constructor(color: string) {
    super(color);
  }
}

const z5 = new Bmw2('black');
