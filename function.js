// 함수
function add2(num1, num2) {
    return num1 + num2;
}
// 함수의 매개변수도 옵셔널하게(선택적 매개변수) 설정이 가능하다. 인터페이스처럼!
function hello(name) {
    return "Hello, ".concat(name || 'world');
}
// JS에서 처럼 매개변수 디폴트값을 지정할 수 있다.
function hello2(name) {
    if (name === void 0) { name = 'world'; }
    return "Hello, ".concat(name);
}
var result = hello();
var result2 = hello('sam');
// 선택적 매개변수는 필수매개변수 앞으로 위치할 수 없다.
// function hi(age: number | undefined, name: string): string {
// 옵셔널한 값을 앞으로 오게하고 싶다면 위 처럼 사용하면 된다
function hi(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hi('sam'));
console.log(hi('sam', 30));
// 나머지 매개변수의 타입 작성법 ...변수명 을 사용하면 갯수 상관없이 배열로 받을 수 있다.
function add3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
add3(1, 2, 3);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var Sam = { name: 'sam' };
function showName(age, gender) {
    console.log(this.name);
}
var a3 = showName.bind(Sam);
a3(30, 'm');
function join(name, age) {
    if (typeof age === 'number') {
        return {
            name: name,
            age: age
        };
    }
    else {
        return '나이는 숫자로 입력하세요';
    }
}
var sam2 = join('sam', 30);
var jame = join('jane', '30');
