/* main5.js */
//function

const arrowFun = x => [1, 2, 3];
console.log('arrowFun : ', arrowFun(7));

console.log('-----------------------------')

const sum10 = ( ) => {console.log('HELLO')}
sum10();

console.log('-----------------------------')

const sum9 = ( ) => 1000
console.log('sum9 :', sum9());

console.log('-----------------------------')

const sum8 = x => x + 300
console.log('sum8 :', sum8(500));

console.log('-----------------------------')

const sum7 = (x) => x + 300
console.log('sum7 :', sum7(5));

console.log('-----------------------------')

const sum6 = (x, y) => x + y
// const sum6 = (x, y) => {return x + y;}
console.log('sum6 :', sum6(22, 131));

console.log('-----------------------------')

const sum5 = (x, y) => {
	return x + y;
}
console.log('sum5 :', sum5(50, 100));

console.log('-----------------------------')

const sum4 = function(x, y) {
	return x + y;
}
console.log('sum4 :', sum4(100, 200));

console.log('-----------------------------')
function sum3() {
	console.log(arguments);
	return arguments[0];
}
console.log(sum3(7, 3));

console.log('-----------------------------')
function sum2(x, y) {
	return x + y;
}

const a = sum2(10, 20);
const b = sum2(5, 10);
console.log('a :', a, 'b :', b);

console.log(sum2(1, 1), sum2(5, 10));

console.log('-----------------------------')
function sum(x, y) {
	console.log(x + y);
}

sum(1, 3);
sum(5, 7);