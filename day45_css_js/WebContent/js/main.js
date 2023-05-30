/* main.js */
 
 //var vs let vs const
 
 let fruits = ['Apple', 'Banana', 'Cherry'];
 console.log(fruits[0]); // Apple 출력
 console.log(fruits[1]); // Banana 출력
 console.log(fruits[2]); // Cherry 출력
 
 console.log(new Date('2023-05-30'));
 console.log(new Date('2023-05-30').getDay());
 console.log(new Date('2023-05-30').getFullYear());
 
 // String Data (문자) : 따옴표를 사용한다.
 let myName = "Jaejin";
 let email = 'jaejin1112';
 //let hap = '안녕하세요. ' + myName + '입니다.';
let hap = `안녕하세요 ${myName} 입니다. 반가워요`;
let hap2 = `저의 이메일은 ${email}입니다.`; 
 
 console.log(myName);
 console.log(email);
 console.log(hap);
 console.log(hap2);
 
 
//Number(숫자 데이터) : 정수 및 부동소숫점 숫자,....
let num = 100;
console.log(num);
num = 99;
console.log(num);
let opacity = 1.34;
console.log(opacity);

//Boolean(불린 데이터) : true / false
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

//Undefined : 값이 할당되지 않은 상태
let undef;
let obj = {pass : 1234, pwd : 'abc'};

console.log(undef);
console.log(obj.pass);
console.log(obj.pwd);
console.log(obj.id);

//Null : 어떤 값이 의도적으로 비어있음을 나타냄
let empty = null;
console.log(empty);

//Object (객체 데이터) : 여러 데이터를  Key : Value 형태로 저장
let user = {
	//key = value
	name : 'jaejin',
	age : 34,
	isValid : true
};

console.log(user);
console.log(user.isValid);
console.log(user.name);
console.log(user.age);

//Array(배열 데이터): 여러 데이터를 순차적으로 저장. [ ];
fruits = ['Apple1', 'Banana2', 'Cherry3'];
console.log(fruits[0]); // Apple 출력
console.log(fruits[1]); // Banana 출력
console.log(fruits[2]); // Cherry 출력
 
//변수 선언 - 재사용이 가능
let a = 2;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
 
a = 12;
console.log(a);
b = 99;
console.log(b);
 
//값(데이터)의 재할당 불가!!
const x = 15;
console.log(x);
 
// x = 9878;
// console.log(x); //TypeError: Assignment to constant variable

//함수 선언
function myFun() {
	//실행 코드
	console.log(1004);
};
//함수 호출
myFun();

function returnFun() {
	return 300;
};

console.log(returnFun());

let call = returnFun();
console.log(call);

function sum(x, y) { // x, y 는 매개변수(Parameters)
	return x + y;
};

// 재사용
let c = sum(1,2);
let d = sum(7, 12);
let e = sum(2, 4);

console.log(c, d, e);

//기명(이름이 있는) 함수
function hello() {
	console.log('Hello');
};

//익명 함수
let world = function() {
	console.log('World!!')
};

hello();
world();

//객체 데이터
const person = {
	name : 'jaejin',
	age : 34,
	//method
	getName : function() {
		return this.name;
	}
}

const hisName = person.getName();
console.log(hisName);

//또는

console.log(person.getName());
console.log(person.age);