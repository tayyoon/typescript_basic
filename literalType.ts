// Literal type
const userName1 = 'Bob';
// const의경우 변경을 할 수 없는 값이기때문에 지정된 string이라는 값을 갖고있다. 그래서 string이라는 타입만 가질 수 있는데 이를 리터럴타입 이라고 한다.

let userName2: string | number = 'Tom';

userName2 = 3;

// type으로 enum과 비슷한형태를 만들 수 있다.
type Job = 'police' | 'developer' | 'teacher';

interface User4 {
  name: string;
  job: Job;
}

const user4: User4 = {
  name: 'Bob',
  job: 'developer', // 위에서 User4의 타입으로 저장 해놨기 때문에 Job타입 안에 있는 것만 대입 할 수 있다
};

// 숫자형 인터페이스도 사용 가능
interface HighschoolStudent {
  name: string;
  grade: 1 | 2 | 3; // | 유니언 타입이라고 한다.
}

// Union type (또는의 의미: |)

interface Car2 {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile2 {
  name: 'moblie';
  color: string;
  call(): void;
}

function getGift(gift: Car2 | Mobile2) {
  console.log(gift.color); // car와 mobile에 둘다 color 프로퍼티가 있기때문에 오류가 나지 않는다.
  // start() // car와 gift 중 둘중 하나만 있기때문에 어떤 것인지 확인이 불가능하다
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}
// 동일한 속성의 타입을 다르게해 구분할 수 있는것을 식별가능한 유니온 타입이라고 한다.

// intersection type 교차타입 : 여러타입을 합쳐서 사용하는 것 (그리고의 의미 : &&)
// 여러개의 타입을 하나로 합쳐주는 역할을 하기때문에 필요한 모든기능을 가진 하나의 타입이 만들어지는 것이다.
interface Car3 {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar: Car3 & Toy2 = {
  name: '타요',
  start() {},
  color: 'blue',
  price: 1000,
};
