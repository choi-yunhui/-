//Selector
//var header = document.getElementsByTagName("header");//유사배열
//tag를 기준으로 html정보를 가져올 때 쓰는메서드
//var services = document.getElementById("services");
//var container = document.getElementsByClassName("container");//유사배열


//유사배열: 배열형식으로 가져옴.하지만 배열관련일부메서드는 사용불가함으로유사배열이 함
//console.log(header);
//console.log(services);
//console.log(container[3]);  // 배열형식으로 접근할수있음

/*var serviceContainer = document
                       .getElementById('services')
                       .getElementsByClassName("container");*/


//console.log(serviceContainer[0]);    //class는여러개일수 있으므로 원하는 클래스의 인덱스를 적어줘야 함. 이게번거롭기때문에 쿼리셀렉터 올을 씀.



/*


var header = document.querySelector('header');
var services = document.querySelector('#services');   
var container = document.querySelector(".container");


//query사용시 가장먼저 나오는 태그와 클래스를 반환함.
//console.log(header);
//console.log(services);
//console.log(container);

//특정 구역 접근할때


var servicesContainer = document.querySelector("#services .container");
console.log(servicesContainer);

*/

//클래스를 모두가져오고싶을 때

//var container = document.querySelectorAll(".container");
//console.log(container);

//반복문과 결합하여 활용
//일괄적인 디자인변경에 활용


//innerHTML, outerHTML

//var header = document.querySelector('.masthead');

//console.log(header.innerHTML);//헤더 안 태그만반환
//console.log(header.outerHTML);//헤더 포함 태그반환

//모두 문자열형식으로 반환

//공식!특정영역에 접근이 가능하다=변경할 수 있다.

//header.innerHTML = "<h1>이야이야오</h1>"


// textContent: 해당영역의 글자정보를 가져옴

//var heading = document.querySelector('.masthead-heading');

//console.log(heading.textContent);
//변경
//heading.textContent = "나이스";

//순수글자정보 기입은 텍스트컨텍스트,태그사용할때는이너html

//innerText(거의안씀)


//태그삽입
/*
//createElement()
var h3Test = document.createElement("h3");
h3Test.textContent = "여기에 문자삽입";

console.log(h3Test);
//여기까지는 코드상으로만 존재하므로 이제 삽입해야 함

//appendChild()
var masthead = document.querySelector('.masthead');

masthead.appendChild(h3Test);
//부모정보              인수로는 삽입할정보삽입

//주의: 49:00 형제지간의 경우마지막에만 적용가능 !!

*/




//insertAdjacentHTML;  원하는 곳에 문자삽입

//삭제

//removeChild(),remove()

//removeChild(). remove() 삭제
/*
var headContainer = document.querySelector('.masthead .container');
var heading = document.querySelector('.masthead-heading');


heading.remve();
*/

//var headContainer = document.querySelector('.masthead .container');

//css의 child와 유사
//console.log(headContainer.firstElementChild);

//css 적용

//class접근 classList (실무사용)


//기존 클래스 유지한 상태에서 새로운 클래스 추가하고싶을 때

/*
// heading.classList.add("test", "test2", "test3");
// heading.classList.remove("text-uppercase");

// heading.classList.toggle("test");
// heading.classList.toggle("test-uppercase");

// console.log(heading.classList.contains("aaa"));
*/




/*
var heading = document.querySelector('.masthead-heading');

heading.addEventListener('keyup', function() {
    console.log("click");
})
*/

// var heading = document.querySelector('.masthead-heading');

/*
// 목포
function test() {
    console.log("클릭");
}

heading.addEventListener('click', test);
heading.addEventListener('click', test);
*/

// 참조타입 ; 배열, 객체, 함수
/*
heading.addEventListener('click', funtion test() {
    console.log("클릭");
});

heading.addEventListener('click', funtion test() {
    console.log("클릭");
});
*/


/*
var obj1 = {name: "kim"};
var obj2 = {name: "kim"};

console.log(obj1 === obj2);
*/




// preventDefault();