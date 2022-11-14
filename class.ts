// 추상 class abstract : 추상클래스는  new를 통해서 객체를 만들 수 없다. 상속을 통해서만 가능하다.

abstract class Car4 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void;
}

// const car = new Car('red')

class Bmw2 extends Car4 {
  constructor(color: string) {
    super(color);
  }
  // 추상클래스 내부의 추상매서드는 반드시 상속받은쪽에서 구체적인 구현을 해줘야한다.
  doSomething() {
    alert(3);
  }
}

const z5 = new Bmw2('black');
