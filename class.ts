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

/* Generic <T> 타입파라미터: 재내릭을 사용하면 클래스나 함수, 인터페이스를 다양한 타입으로 재사용이 가능하다.
선언할때는 타입 파라미터만 선언해주고 생성하는 시점에 사용하는 타입을 결정한다 */

function getSize<T>(arr: T[]): number {
  return arr.length;
}

/* 매개변수의 타입이 바뀌었는데 같은함수를 재사용하고 싶다면 오버로드를 사용하던가 아니면 유니언타입을 사용할 수 있다.
하지만 점점 많아질 경우 계속해서 추가를 하기에 번거롭기 때문에 재내릭타입을 사용한다. 
전달되는 매개변수를 보고 어떤 타입인지 타입스크립트는 알고 있지만, 특정 타입을 잡고 싶을때 적어주는 것이 좋다. */
const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ['a', 'b', 'c'];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

const arr4 = [{}, {}, { name: 'Tim' }];
getSize<object>(arr4);

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: 's21',
  price: 2000,
  option: {
    color: 'red',
    coupon: false,
  },
};

/*
const m1: Mobile<{color:string, coupon:boolean}> = {
    name: 's21',
    price: 2000,
    option: {
      color: 'red',
      coupon: false,
    },
*/

const m2: Mobile<string> = {
  name: 's22',
  price: 1000,
  option: 'good',
};

interface User3 {
  name: string;
  age: number;
}

interface Car5 {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user2: User3 = { name: 'a', age: 10 };
const car: Car5 = { name: 'bmw', color: 'red' };
const book: Book = { price: 3000 };

/* 모든 매개변수에 name이 있다고 장담할 수 없기때문에 다양한모습의 객체가 올 수 있지만 name은 string인것이 항상 온다.
name이 없는 book의 경우 에러가 나는게 당연하다. */
function showName2<T extends { name: string }>(data: T): string {
  return data.name;
}

showName2(user);
showName2(car);

// showName2(book);
