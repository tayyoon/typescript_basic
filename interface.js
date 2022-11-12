var user = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B'
};
user.age = 10;
user.gender = 'male';
console.log(user.age);
var add1 = function (x, y) {
    return x + y;
};
var aaa = function (age) {
    return age > 19;
};
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('go...');
    };
    return Bmw;
}());
var b2 = new Bmw('green');
b2.start();
var benz = {
    door: 5,
    stop: function () {
        console.log('stopp');
    },
    color: 'black',
    wheels: 4,
    start: function () {
        console.log('go...');
    }
};
