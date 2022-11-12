// 문자열 리터럴 타입
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string; // ?를 붙히면 옵셔널한 프로퍼티이다. 있어도 되고 없어도 되지만 있다면 문자열이어야 한다.
  readonly birthYear: number; // readonly를 붙히면 읽기전용이기때문에 뒤쪽에서 수정을 다시 할 수는 없다.
  [grade: number]: Score; // 위쪽에서 지정해둔 socre타입의 범위에서만 벨류 값으로 지정할 수 있다.
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
  2: 'B',
};

user.age = 10;
user.gender = 'male';
console.log(user.age);

// 인터페이스로 함수 정의하기
interface Add {
  (num1: number, num2: number): number;
}

const add1: Add = function (x, y) {
  return x + y;
};

interface isAdult1 {
  (age: number): boolean;
}

const aaa: isAdult1 = (age) => {
  return age > 19;
};

// 인터페이스로 클래스 정의 implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  constructor(c: string) {
    this.color = c;
  }
  wheels = 4;
  start() {
    console.log('go...');
  }
}

const b2 = new Bmw('green');
b2.start();

// 인터페이스는 확장이 가능하다 extends

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stopp');
  },
  color: 'black',
  wheels: 4,
  start() {
    console.log('go...');
  },
};

// extends는 여러개도 가능하다
interface Car1 {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
