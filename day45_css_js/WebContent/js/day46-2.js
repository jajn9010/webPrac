/* day46-2 */
import getType, {urandom} from './getType.js';

//산술 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(9 % 5);

//할당 연산
let x = 2;
x += 1; // x = x + 1
console.log(x);

//비교연산자
const y = 1;
const z = '1';
console.log(y == z);
console.log(y === z);

function isEqual(x, y) {
	return x=== y;
}

//논리연산자
const c = 1 === 1;
const d = 'AB' ==='AB';
const e = false;

console.log(c);
console.log(d);
console.log(e);
console.log('&&: ', c && d && e); //and
console.log('||: ', c || d || e); //or

//삼항연산자
const f = 1 < 2;
if(f) console.log("참");
else console.log("거짓");

console.log(f ? "참" : "거짓");

console.log(urandom())

const func = urandom();

if(func === 0) {
	console.log('func is 0');
} else if (func === 9) {
	console.log('func is 9');
} else {
	console.log('rest.....');
}

console.log(isEqual(1, 1));
console.log(isEqual(1, 2));
console.log(isEqual(1, '1'));
console.log(y !== z);

console.log(typeof 'Hello World!');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType({}));
console.log(getType([]));
console.log(getType(null));

//---------------------------------------------------------
const a = 'DaeBo!';
//split : 문자를 인수 기준으로 쪼개서 배열로 변환
//reverse : 배열을 뒤집기
//join : 배열을 인수 기준으로 문자로 병합해 반환

const b = a.split('').reverse().join('');
console.log(a)
console.log(b) 

const boxEl = document.querySelector('.box');
console.log(boxEl);

//Getter, 값을 얻는 용도
console.log(boxEl.textContent);

//Setter, 값을 세팅하는 용도
boxEl.textContent = 'Yuna!!';
console.log(boxEl.textContent);