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

// 유틸리티 타입

// keyof : 인터페이스의 키값들을 유니언형태로 받을 수 있다.
interface User5 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User5; // 'id' | 'name' | 'age' | 'gender' 와 동일하다
const uk: UserKey = 'id';

// Partial<T> 파셜: 프로퍼티를 모두 옵션으로 바꿔주어 일부만 사용하는게 가능하다.
// age와 gender가 없어서 에러가 뜬다. 아래와 동일하다고 보면 된다.

/* interface User5 {
  id?: number;
  name?: string;
  age?: number;
  gender?: 'm' | 'f';
} */
let admin: Partial<User5> = {
  id: 1,
  name: 'Bob',
};

// Required<T> :  모든 프로퍼티를 필수로 바꿔준다
interface User6 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Required<User6> = {
  id: 1,
  name: 'Bob',
  age: 30,
};

// Readonly<T>
let admin3: Readonly<User6> = {
  id: 1,
  name: 'Bob',
  age: 30,
};

// admin3.id = 4 // 와 같이 재할당이 불가능하고 처음 할당할때에만 가능하다.

// Record<K, T> : k는 key, T는 type으러 지정하는 느낌으로 사용한다
type Grade2 = '1' | '2' | '3' | '4';
type Score2 = 'A' | 'B' | 'C' | 'D' | 'F';

// const score2: Record<'1' | '2' | '3' | '4', 'A' | 'B' | 'C' | 'D' | 'F'>;    아래처럼 선언할 수도 있다.
const score2: Record<Grade2, Score2> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};

interface User7 {
  id: number;
  name: string;
  age: number;
}

function inValid(user: User7) {
  const result: Record<keyof User7, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  };
  return result;
}

// Pick<T, K> T: 인터페이스, K는 사용할 타입(파라미터)를 꼽는다
interface User8 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

const admin8: Pick<User8, 'id' | 'name'> = {
  id: 0,
  name: 'Bob',
};

// Omit<T, K> : Pick<T, K> 의 반대로 특정 프로퍼티를 생략하고 사용할 수 있는 것, 생략할 프로퍼티를 고르는것
const admin9: Omit<User8, 'age' | 'gender'> = {
  id: 0,
  name: 'Bob',
};

// Exclude<T1, T2> : Omit 과 비슷하지만 Omit은 프로퍼티를 제외하는것이고, Exclude는 타입으로 제외시키는 것이다. T1의 타입중 T2타입과 겹치는것을 제외하는 것이다
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<T> : null을 제외한 타입을 생성한다, 언디파인드도 함께 제외시킨다
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
