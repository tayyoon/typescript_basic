// 함수
function add2(num1: number, num2: number): number {
  return num1 + num2;
}

// 함수의 매개변수도 옵셔널하게(선택적 매개변수) 설정이 가능하다. 인터페이스처럼!
function hello(name?: string) {
  return `Hello, ${name || 'world'}`;
}
// JS에서 처럼 매개변수 디폴트값을 지정할 수 있다.
function hello2(name = 'world') {
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello('sam');

// 선택적 매개변수는 필수매개변수 앞으로 위치할 수 없다.
// function hi(age: number | undefined, name: string): string {
// 옵셔널한 값을 앞으로 오게하고 싶다면 위 처럼 사용하면 된다
function hi(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hi('sam'));
console.log(hi('sam', 30));

// 나머지 매개변수의 타입 작성법 ...변수명 을 사용하면 갯수 상관없이 배열로 받을 수 있다.
function add3(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add3(1, 2, 3);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// this 의 타입을 지정하려면 함수의 첫번째 파라미터 자리에 this: type식으로 표기해준다
interface User2 {
  name: string;
}

const Sam: User2 = { name: 'sam' };

function showName(this: User2, age: number, gender: 'm' | 'f') {
  console.log(this.name);
}

const a3 = showName.bind(Sam);
a3(30, 'm');

// join 벨리데이터 역할을 하게 될 것이다.
interface User3 {
  name: string;
  age: number;
}
// 오버로드 : 함수 오버로드는 전달받은 매개변수의 갯수나 타입에따라 다른동작을 하게하는것을 의미
function join(name: string, age: number): User3;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User3 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력하세요';
  }
}

const sam2: User3 = join('sam', 30);
const jame: string = join('jane', '30');
