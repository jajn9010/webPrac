/* main6.js */

//타이머 함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간) : 시간 가격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수 종료
//clearInterval() : 설정된 Interval 함수를 종료

function timeout(callback) {
	setTimeout(() => {
		console.log('DaeBo!')
		callback()
	}, 3000);
}

timeout(() => {
	console.log('Done');
});

/*
const timer = setInterval(() => console.log('DaeBo33!'), 500);

const h3El = document.querySelector('h3');

h3El.addEventListener('click', () => {
	//alert('안녕');
	clearInterval(timer);
})

//const timer = setTimeout(() => console.log('DaeBo!'), 3000);


setTimeout(() => console.log('Jaejin!'), 3000);

setTimeout(function() {
	console.log('DaeBo!');
}, 3000);
*/
//호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7;

method(); // 함수 호출

function method() { // 함수 정의부
	console.log(a * 3);
}

// 함수 표현식 형태에서는 호이스팅이 되지 않음.
/*const method = function() {
	console.log(a * 3);
}*/
//method()