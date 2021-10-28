
//클래스(생성자함수)

//객체지향프로그램(oop)

//생성자 함수 (일반함수와구분하기위해 첫글자대문자)


function Heroes(name,age){  //붕어빵틀
  this.naem = name;
  this.age = age;



}


//인스턴스: 생성자함수에서 new키워드를 통해 도출된 결과,붕어빵
var superMan = new Heroes('슈퍼맨', 30);
var blackWidow = new Heroes('블랙위도우', 34);

//console.log(superMan);
//console.log(blackWidow);


//생성자함수가 붕어빵틀이고 new키워드를 통해 찍어냄 (여기오는건내용물)




/*

function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;

   this.fullName = function () {
      console.log(this.firstName + " " + this.lastName);
   } 
}

var kim = new Person("inwkweon","kim");

var park = new Person("David","Park");


console.log(kim);
console.log(park);



*///여기서 function()부분은 모두 동일하므로 이것은 프로토타입으로 처리함


/*
//프로토타입  면접에꼭등장
//person 생성자 함수를 만들 때 js는 person.prototype 객체를 같이 생성한다.
//person.prototype : 조상
function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;

}

Person.prototype.fullName = function() {
   console.log(this.firstName + " " + this.lastName);//유전자같은것
}


//인스턴스 : 후손
var kim = new Person("inwkweon","kim");

var park = new Person("David","Park");


kim.fullName();
park.fullName();

console.log(kim);
console.log(park);


*/


//__proto__
/*
//constructor 생성자함수가 누구인지를 물을 때 사용
var str11=new String("Nice");

console.dir(str11);
console.log(str.constructor);
console.log(str.constructor===String);

var arr11 = new Array();

console.log (arr11.constructor === Array);
console.log (Array.prototype.constructor === Array);

var func11 = new function():

console.log (func11.constructor === Function);
console.log(Function.prototype.constructor === Function);
*/



//this

//일반함수 this --> window
//중첩함수 this -->window
//이벤트에서    -->      이벤트객체
//메서드에서       -->     객체
//메서드 안에 함수가 들어가있다면-->  window
//중첩으로 들어가있는 함수 안에서의 this --> 무조건 window




//검증
/*
function a () {

   function b() {
      console.log(this); //window
   } 

 b();

}

a();           

*/

//event에서의 this
/*
var prevBtn = document.querySelecrot('prev')

prevBtn.addEventListener('click', function() {
    console. log(this);
})
*/



/*
var obj = {
    age: 100,
    sum: function() {
       console.log(this.age);

       function a() {
           console.log(this)
       }

        a();

    }
}

odj.sum();
*/




// that
/*
var obj = {
    age: 100,
    sum: function() {

       var that = this;
       
       function a() {
           console.log(that);
       }

        a();

    }
}

odj.sum();
*/


// 템플릿 리터럴 (Template Literal)
// ``,"",''
/*
var name = "기발자"

console.log("내 이름은" + " " + name + "입니다.");
console.log(`내 이름은 ${name}입니다.`);
*/

/*
var arr = [];
var i = 0;

function Customer(name, img, txt) {
   this.name = name;
   this.img = img;
   this.txt = txt;
}

function createCustomer(name, img, txt) {
    var fullImg = `img/customer-${img}.jpg`;

    var customer = new Customer(name, fullImg, txt);
    arr.push(customer)
 }

createCustomer('사과 1 이름', 0, "사과 1 설명");
createCustomer('사과 2 이름', 1, "사과 2 설명");
createCustomer('사과 3 이름', 2, "사과 3 설명");
createCustomer('사과 4 이름', 3, "사과 4 설명");


console.log(arr);
*/


//이전 이미지 슬라이드효과
/*var arr [

{
   img:"img/img-0.jpg",
   name:"사과이름 0",
   txt: "사과설명 0"
},

{
   img:"img/img-1.jpg",
   name:"사과이름 1",
   txt: "사과설명 1"
},

{
   img:"img/img-2.jpg",
   name:"사과이름 2",
   txt: "사과설명 2"
},

{
   img:"img/img-3.jpg",
   name:"사과이름 3",
   txt: "사과설명 3"
},

];

var index = 0;



//document.querySelectAll('.btn');

//클래스를모두가져오라는뜻

document.querySelectotAll('.btn').forEach(function(element,index) {

element.addEventListener('click',function(e){


       e.preventDefault();
       //a태그의#으로인한새로고침 방지

       
});


});

*/


