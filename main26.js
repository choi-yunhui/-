
//if조건문

// var a =20;
// var b =40;
// var c =60;

/*
if (a<b) {
  console.log("a는b보다 작다.");
}

//(여기서는참,거짓만인식)
*/

/*

if-else 구문: 거짓에 대해 출력할때
if(a>b){
	console.log("a는b보다크다");
} else{
	console.log("a는b보다작다");
}

*/


//else-if구문: 여러개의 조건들을 설정할 때 사용


// if(a>b){
// 	console.log("a는 b보다 크다");
// } else if (b>c) {
//     console.log("b는 c보다 크다");
// } else if (a < c) {
// 	console.log("a는 c보다 작다");
// } else if (b < c) {
// 	console.log("b는 c보다 작다");
// } else {
// 	console.log("모든 조건을 만족하지 않는다.");
// }

//여러개의 참이 있다면 가장먼저나온것만 실행하고 나머지는 무시


//중첩if문 

// if (a !== b) {

//     if(a > b) {
//     	console.log("a는b보다 크다");
//     } else {
//     	console.log("a는b보다 작다");
//     }
// } else {
//   console.log ("a와b는같다.");

// }


// //거짓이 되는 상황
// //()에 false외에 ""(빈 문자열),0,null,undefined이 와도 else를 실행한다.
// if ("") {
// 	console.log("참!");
// } else {
// 	console.log("거짓!");
// }

// //삼항연산자

// var age = 15;

// if (age >= 18 ) {
// 	console.log ("성인");
// } else {
// 	console.log ("어린이");
// }

// var result = (age >= 18) ? "성인" : "어린이";

// //한줄일때는 가독성좋은 삼항연산자 사용하는게 좋다


/*
var userId = prompt("아이디를 입력해주세요");
 var userId = prompt("비밀번호를 입력해주세요");

//브라우저에서만작동됨. 사용자에게 어떤 값을 전달받을 때 사용됨
//팝업디자인은각각다름
console.log(userId);
console.log(iserPw);

if(userId==="inkweon" && userPw ==="12345"){
	alert("로그인되었습니다.");
} else{
	alert("아이디 또는 비밀번호가 틀렸습니다.");
}



//만약 여기서 아이디중 비번 무엇이 틀렸는지 알려주개 하려면?


//userPw는 문자라서 12345와 false나옴
//그래서 다음과 같이 
//위헤 parseInt를 사용함

if(userId==="inkweon" && parseInt(userPw) ===12345){
	alert("로그인되었습니다.");        
} else{
	alert("아이디 또는 비밀번호가 틀렸습니다.");
}

*/
/*
//전역변수,지역변수

var globalV = "전역변수";

function func() {
	var localV = "지역변수";

	console.log(globalV);
	console.log(localV);
}

//func(); 함수호출 >> 전역변수,지역변수 출력됨

console.log(globalV);
	console.log(localV);  //지역변수이므로 오류남

//함수안에서 만들어진 게 지역변수,함수를 기준으로 전역,지역 구분됨

여기까지는 예전자바내용
*/

//cf.최근 자바는 let const로 변수를 만들게되면 기준이 함수가 아님. 이건지금공부안함


/*

var gv = "전역변수";

function func() {
	var gv = "지역변수";
	console.log(gv);
}

func();                    

console.log(gv);           




var gv = "전역변수";

function func() {
	 gv = "지역변수";
	console.log(gv);
}

func();                    

console.log(gv);           

//이때는 위와달리 모두 지열변수 출력됨 , gv = "지역변수";가 위의 gv를변경해준것이 되기 때문

//함수 안에 새로운 변수 만들 때는 var를 꼭 넣어야 함!!

*/


/*
//전역,지역구분은 함수이지 {} 가 아님을 유의하자!

var gv = "전역변수";


if(true) {
	var lv = "지역변수???";

	//console.log(gv);
	//console.log(lv);
}

console.log(gv);    
console.log(lv);

*/





//var gv = "전역변수";

//모든전역변수는 widow의 기본property로할당됨, 콘솔에서 확인가능


//변수가 영향력을 발휘하는 범위:스코프

/*
//전역스코프: 모든 영역에 영향력을 발휘할 수 있는 스코프

var gv = "전역변수"

function func() {
	console.log (gv);
}

func();        //전역변수

console.log(gv); //전역변수


//지역스코프 : 변수가 영향력을 발휘하는 범위가 함수 내임.


function func() {
	var lv = "지역변수";
	console.log(lv);
}

func();

console.log(lv);  //이건 오류, 지역스코프니까
*/

/*
//렉시컬스코핑 중요!!함수는 서로의 스코프에 접근할수 없다!!!!,반복적으로연습할것


function a() {
	var apple="사과";
}


function b () {
	a()://이렇게 부르는 게 불가능 
	console.log (apple);
}

b():

*/

//스코프체인: 안쪽에서부터 외부를 탐색하는 것.밖에서안을탐색한느 건 불가.

/*

var name = "inkweon";

function func1() {
	console.log (name);   //june이 출력됨
}

function func2() {
	var name = "jun";

	func1();
}

func2();

//1:23부분 헷갈림 복습하기, 용어는 안중요,개념을 설명할수있도록 반복하기


*/

//호이스팅
/*

//변수 호이스팅 : 변수가 밑에 있어도 끌어올려준다.

console.log(a);

var a;       //변수를 선언한 것만 호이스팅,아래 초기한것까지는 반여하지 않음
a = "나는 a"//코드상으로는 선언과 초기화가 분리된 상태로 진행되기 때문에 이렇게 해도 undefined가 나옴. !!
*/


//함수 호이스팅, 함수가 끌어올려짐

// func1();    //이렇게 함수를 호출한 후에 함수를 만들 수 있다.

// function func() {
// 	console.log("func1 함수다.");
// } 

//변수를 만들어 함수를 할당한 다음 호출할 수도 있다.


//func2(): 만약 이렇게 한다면 var=func2 = undifined; 이므로 이것은함수가 아니라고나옴
// var func2 = function() {
//    console.log("func2 함수다")
// }

// func2();

//cf. mdn method 검색해서 공부

//parseInt(), parsefloat()
//string --> number
/*
var str1 = "20.6";
var str2 = "3.14";

var num1 = parseInt(str1);
var num2 = parsefloat(str2);

console.log(num1); 
console.log(num2); 
*/

/*
//반복문
//고정값: console.log(2*);
//일정한 규칙을갖고있는 가변값 1,2,3,..
console.log(2*1);
console.log(2*2);
console.log(2*3);

...

//while

var num = 1;  //시작점 지정

while (num < 10) { 위지지정

}

*/
//var arr = ["사과","배","수박"];

//삽입
//arr.unshift("포도","토마토");
//console.log(arr)

//삭제

//pop: 뒤에서부터 데이터를 삭제하는 메서드

// arr.pop();

// console.log(arr);

//shift:앞에서부터 데이터를 삭제하는 메서드
//arr.shift();

//console.log(arr);

// //join: 배열안에있는걸 규칙을 가진 문자열로 만들고싶을 때
// var arr1 = ["사과","배","바나나"];
// var arr2 = ["노트북","마이크","키보드"];
// // var str1 = arr1.join(','); 
// //()안에는 그 규칙을 넣어준다.

// // console.log (str1);

// var merge = arr1.concat(arr2);

// console.log (merge);