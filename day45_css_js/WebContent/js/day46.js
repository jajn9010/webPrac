/* day46.js */

//HTML 요소(Element) 1개 검색/찾기
const boxEls = document.querySelectorAll('.box');

//찾은 요소들 반복해서 함수 실행 - 익명함수 추가
//boxEl.forEach(function(1, 2, 3){ // function(1) : 반복문에 대한 하나하나의 요소를 가져오는 것, function(1, 2) : 인덱스를 가져오는 것, function(1, 2, 3) : forEach문을 통해 가져온 전체 데이터 값
boxEls.forEach(function(item, index){
	item.classList.add(`order-${index + 1}`);
	console.log(index, item);
});

const boxEl = document.querySelector('.box');
//HTML 요소에 적용할 수 있는 메소드
//인수(Arguments)를 추가 기능
//boxEl.addEventListener(1, 2); 1: 이벤트명, 2: 할일(보통 function으로 많이 사용함)
boxEl.addEventListener('click', function(){
	console.log('Click~~~');
	boxEl.classList.add('active');
	console.log(boxEl.classList.contains('active'));
	boxEl.classList.remove('active');
	console.log(boxEl.classList.contains('active'));
});


let isShow = true;
let checked = false;

if(isShow) {
	console.log('Show!');
}

if(checked) {
	console.log('Checked!')
}

if(checked) {
	console.log('Show!');
} else {
	console.log('Checked!')
}