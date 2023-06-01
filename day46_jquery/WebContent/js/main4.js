/* main4.js */
//함수
//function name() { }
//function name(val1, val2) { }
//function name() { return value; }

//즉시 실행함수 (function)(매개변수)
const xy = 7;
function double() {
	console.log(xy * 2);
}

double();
console.log('*-------------------------------------------');
(function square(x) {
	console.log(x * x);
}(2));

(function() {
	console.log(xy * 2);
}());
console.log('*-------------------------------------------');

var y =789;
function scope() { //함수 정의부
	if(true) {
		console.log(y);
	}
}

scope();
console.log('*-------------------------------------------');

//형변환
//참 : true, {}, [], 1, 2, 'false', -12, '3.45', 12.34,........
//거짓 : false, '', null, undefined, 0, -0, 0.0, NaN
if('false') { //if(!0) {
	console.log(1323);
}

const a = 1;
const b = 1;

if(a===b) {
	console.log('true');
}

//화살표 함수
// 0 => {} vs function() { }
const double2 = function(x, y) {
	return x * 2 + y;
}

console.log('double2 : ', double2(6, 7));

const double3 = (x) => {return x * 2};
console.log('double3 : ', double3(3));

