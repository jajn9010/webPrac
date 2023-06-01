/* main7.js */

//this
//일반(Normal) 함수는 호출 위치에서 this 정의
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

function User(name) {
	this.name = name;
}

User.prototype.arrow = () => {
	console.log(this.name);
}
/*
const jaejin = {
	name : 'Jaejin',
	normal: function() {
		console.log(this.name);
	}
}
*/

const jaejin = {
	name : 'Jaejin',
	normal : function() {
		console.log(this.name);
	},
	arrow: () => {
		console.log(this.name);
	}
}

const jaejin2 = new User("Yuna");
jaejin.normal();
jaejin.arrow();