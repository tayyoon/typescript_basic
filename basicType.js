function add(num1, num2) {
    console.log(num1 + num2);
}
// add();
// add(1);
add(1, 2);
// add(3, 4, 5);
// add('hello', 'world');
// 함수를 만들때 의도했던바와 다르면 에러사항으로 받아들인다.
function showItems(arr) {
    arr.forEach(function (item) {
        console.log(item);
    });
}
showItems([1, 2, 3]);
// showItems(1, 2, 3);
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['mon', 'tue', 'wed'];
// week1.push(3); 문자열 배열이기때문에 숫자가 들어갈 수 없음
// 튜플 (배열과 비슷한 모양으로 타입이 다를때 사용)
var b;
b = ['z', 1];
// b = [1,'z'] : 순서가 뒤바뀌면 에러를 발생한다
b[0].toLowerCase();
// b[1].toLowerCase(); 두번째 인자는 숫자이기 때문에 소문자로 변경할 수 없어서 에러를 발생
// void : 함수에서 아무것도 반환하지 않을때 주로 사용,
function sayHello() {
    console.log('hello');
}
// never : 항상 에러를 반환하거나 영원히 끝나지않는 것의 타입으로 사용 가능
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something
    }
}
// enum : 자바스크립트에 없으면서 비슷한 값들끼리 묶어줬다고 생각하자, 수동으로 값을주면 0부터 1씩 증가하면서 할당, 값을 할당하면 할당한 수 부터 1씩  증가 : 숫자를 할당할경우 양방향 매핑이 가능함, 하지만 문자열일 경우 단방향으로만 가능함
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
var myOs; // window, Ios, Android 중에것만 할당할 수 있다.
myOs = Os.Window;
// null, nudefined
var aa = null;
var bb = undefined;
