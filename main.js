//comic 박스를 생성한 상태
//변수선언
// var comic;

// //comic 박스 안에 원피스 데이터를 할당한 상태
// //변수초기화
// comic="원피스";

// console.log(comic);

// var apple = "사과";   //동시에 선언하기

// var a;
// var b;
// var c;

// var a, b, c;   

// var a, 
//     b, 
//     c;                //둘다 가능

 //변수 동시 초기화

 // var d = 10;
 // var e = 20;
 // var f = 30;

 // var d = 10, e = 20, f = 30;


// 모든 변수는 선언과 동시에 undifined가 자동으로 할당됨.

// var computer;

// console.log(computer);


// var house;
// house = "집";
// console.log(house);

// house = "아파트"
// console.log(house);






// var house;
// console.log(house);

// // undifined->집   중요!
// house = "집"
// console.log(house);



//변수작성요령 단어두개조합 

//캐멀 케이스
// var mathScoreStudent = 10

//스네이크 케이스
// var math_score_student = 10


//주의점 - 사용불가

//var math-score-student=100; 


// 이 두가지 특수문자 빼고 사용불가
// var $math;
// var _math; 

// 변수앞에 숫자못옴
// var apple10; 가능
// var 10apple; 이건불가능

// var w; 의미가 불분명한 변수사용은 기피해야 함

//데이터타입

// var msg1 = "hello world";
// var msg3 = 'welcome';         // 따옴표섞어쓰면안됨

// console.log(msg1);    
// console.log(msg2);


// //she's girl
// var msg4 = "she's girl";
// var msg4 = 'she\'s girl';

// console.log(msg4);    
// console.log(msg5);


// 숫자 (number)  콘솔에파랑으로표기

// var num1 =10; 
// var num1 =-10; 
// var num1 =3.14; 
// var num1 =-3.14;


// console.log(num1);  
// console.log(num2);  
// console.log(num3);  
// console.log(num4);    

// console.log(num1+num2);  연산가능

//연산자
//숫자사칙연산
// var a = 20;
// var b = 10;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b); 나머지

// //문자열 

// console.log(str1+str2);  덧셈의경우문자로인식하여이어붙임나머지연산은가능
// console.log(str1-str2);
// console.log(str1*str2);
// console.log(str1/str2);
// console.log(str1%str2);

// //"" 공백하나하나도 문자로인식


// var str11 = "현재 시간은";
// var time = 10;
// var str12 = "시 입니다.";

// console.log(str11 + time + str12);

//++,--연산자

// var num10 = 10;

// num10 = num10 -1;  //기존데이터10에서9로변경됨

// // console.log(--num10); //9
// // console.log(--num10); //8
// //--변수 안의 숫자를 -1씩 차감한다는 뜻

// console.log(++num10); //1씩 증가 


// //주의 선차감후차감,+도마찬가지

// console.log(num10--);
// //console.log(num10);   한 텀 쉬고 9로 출력됨


// // +=,-=,/=,%=           연산값을 새로운자기자신으로업데이트함

// var num = 20;

// // num20 = num 20 +10;

// num20+=10;

// console.log(num20);


// //비교연산자 >, <, ==, ===, <=, >=,!=,!==
// var a = 10;
// var b = 20;
// var c = 30;

// console.log(a > b);

// //이건true, false boolean

/*
console.log(a == b);
console.log(a === b);  

//모두 false,==,===같은 뜻

console.log(a != b); 
console.log(a !== b); 

//a,b가 다른지라는 뜻

*/

// var num10 = 10;
// var num10 = 20;

// var str10 = "10";
// var str10 = "20";

// console.log(num10 == str10);  //true
// console.log(num10 === str10);  //false  데이터타입같은지도 엄격히따짐

// console.log(num20 != str20);  //false
// console.log(num20 !== str20); // true  애초에 데이터타입 다르니까


//정확성을 위해 ===,!==만 쓴다고 생각하기


//논리연산자 and(&&) or(||)

// var num30 = 30;
// var num40 = 40;
// var num50 = 50;

// console.log(num30 === num40 && num30 ===num50&& num30);  //f
// console.log(num30 === num40 || num30 ===num50);  //f


// &&는 둘다참일 때 true
// ||는 하나만참이어도 true

//여러연산 길게연결가능












//불리안: true, false 여러 상황자체를 기억하는 게 좋다

// console.log(true);
// console.log(false);
// console.log(1===2);
// console.log(10<20);
// console.log(10===10||20==30);

// var bool = true;
// bool = false;  //이렇게도 가능,??


//null, undifined
//null: 변수 초기화로 명시적으로 빈값을 변수 안에 할당한 상태
// var n = null;

// //undifined 변수를 선언한 상태
// var u:

// console.log(n):
// console.log(u):

//null

//null이 type of에서 object로 출력되는것(원시타입인데 참조타입으로출력됨)은 버그

//null과 undifiend 차이점
// console.log(typeof 10):
// console.log(typeof "hello")

// console.log(typeof null);
// console.log(typeof undefined);

// console.log(null == undifiend);  t
// console.log(null === undefined); f

//! 부정

//console.log(!true);
//console.log(!false);

//console.log(!null);  //true
//console.log(!!null);   //!ture

//undefined 도 마찬가지


//console.log(10+null); // null > 숫자와만나면 0이
//console.log(10+undifined); // NaN (not a number);

//참조타입


//함수
//console.log(10+10);

//임의 숫자두갤르전달받아서 덧셈을 하는기능을 만들고싶다

// 함수선언,함수호출,몇번이고 호출 가능

// parameter(매개변수), argument(인수)


//매개변수:num1,num2
/*
function sum(num1,num2) {

    console.log (num1+num2);
}

//인수: 호출 시 전달되는 값

sum(10,20);
sum(100,50);
*/
/*
function fullname (firstname,lastname){
    console.log (firstname+" "+lastname);
}

fullname("yoonhee","choi");

*/


/*
function area(width, height){
    console.log(width);
     console.log(height);

     // var result= width*height;
      // console.log(result);
} 

area(10); //하나만 주면 다른하나는undifined

*/

//모든데이터타입이 매개변수가될수있다


// //return

// function sum(num1,num2) {
//     return num1 + num2;
// }

// var result = sum(10,20); //함수호출 = 30, result = 30 할당
// console.log(result);


//return은 다른 변수의 값을 전달 할 때,return으로 전달받은걸 응용할때 사용함


// function area(hor, ver) {
//     return hor * ver;  //반환된커피
// }

// console.log(area(10, 20));  //200나옴

// var volume = area(10, 20) * 100;   
// console.log (volume);//20000 (부피), 이런 식으로 return을활용함. 

//배열(array)

// var banana = "바나나";
// var apple = "사과";
// var melon = "멜론";           이걸 간단히 바구니에 담듯

 // var fruit = ["바나나", "사과", "멜론"];
// console.log(fruit);
// //이때 출력되는 0,1,2는 데이터좌표이며 index라고 함.
// //인덱스를활용하여 배열안의특정데이터에 접근할수 있음.
//length는 배열 안에 있는 데이터의갯수를 의미함.

// console.log(변수명[좌표값]);
// console.log(fruit[2]);


//특정데이터 접근이 가능하다는 건 변경도 가능하다는 뜻!

// fruit[2]="체리"
// console.log (fruit);

//배열에는모든 데이터타입을 삽입할수있다.
/*
var arr = 
[10, 
"hello", 
true, 
null, 
undefined,
function 
a() {},
[10,20,30]
{name:"kim"}]
*/

//주의 1) 배열안에는 가능한 동일한 데이터타입을 넣어준다.
//2)가능한 동일한 성격을 가진 데이데이터로 구성한다

//ver num = [10, 20, 30, 3.14] //이렇게숫자끼리만.다른 타입이 오면 어려워짐

//var fruit = ["사과","배","바나나","양상추"] //데이터타입은같더라도 성격이 다르면 x


// //배열 안에 있는 배열데이터에 접근하는 방법
// var score = [[10,20,30],[100,200,300]]

// console.log(score);
// console.log(score[1]);//[100,200,300]
// console.log(score[1][2]) //300

// //cf. 배열안에배열안에배열이있는 경우도 마찬가지로 []사용. (아직모르겠음)


//객체 (object)  여러정보 때려넣을 때사용
//이름,나이,스킬,성별
//key-value=property
/*
var student = {
    name: "인권",
    age:21,
    skills: ["자바스크립트","html","css"]
};

console.log(student);

//데이터에 접근하는 방법 1

console.log(student.name);
//2
console.log(student["name"]);
//console.log(student["key"]);

//ex)html을 가져온더면
console.log (student.skills[1]);

//데이터변경도 가능

student.age = 100;

console.log(student);

//새로운 key를 추가하는것도 가능

student.gender = "여성";

console.log(student); 
*/

/*
//키값으로 함수도 올수 있는데,이때는 함수명은 안넣는다.
var student = {
    name: "인권",
    age:21,
    skills: ["자바스크립트","html","css"]

    test1: true,
    test2: null,
    test3: undefined,
    test4: {color: "red"},

    //메서드:객체안에서만들어진 함수, 객체 바깥에서 만들어진 함수는 그냥 함수임. 서로 분리하여 용어정리할것.

    sum: function (num1, num2) {
        return num1 + num2;
    }
};


var result = student.sum(10, 20);
console.log(result);


student.sum(100,200);              //student라는객체안에서 sum이라는 메서드사용
console.log("hello world");     //console이라는 객체안에서 log라는 객체 사용

*/
/*
//원시타입과 참조타입 차이점
//원시
var str1 = "hello world";
var str2 = str1;

// str1 = "nice";
str2 = "nice";

console.log(str1);
console.log(str2);            

//복사 후 저장한 것은 이후 수정해도 영향주지않는 것과 마찬가지, 이부분 다시

//참조타입

var obj1 = {name: "inkweon"};
var obj2 = obj1;



console.log(obj1);
console.log(obj2);  

//하나만바꿔도 둘다바뀜,원시참조1:27경 매우 중요
*/


//yellow,green,pink...배열안의 색상을 랜덤으로가져와적용하도록
/*
var colors = [
'yellow','green','pink','#dc143c','rgba(123,123,123,0.5)'];

var bg = document.getElementById('color-bg');
var btn = document.getElementById('btn');

btn.addEventListener('click',function() {
    console.log("hello");
})
*/
//document는 html문서에 영향력을 발휘하는 객체!,위에서는 id값으로 접근함.

//콜백함수

console.log("main");

var mainVar = "Main Var";
