var form = document.getElementById('form');
var input = document.getElementById('msg');



var feedback = document.querySelector('.feedback');

var txt = document.getElementById('txt');



//css의 접근방식으로 접근할 때 쿼리셀렉터사용 '태그명',#아이디,.클래스형식으로

form.addEventListener('submit',function(e) {
                              //뭐든무방하나 관례적으로 e 


  e.preventDefault(); //태그본연의기능정지//<form>자체가 submit과동시에 브라우저를새로고침하는 기능이 있으므로 이를 막아야됨


//console.log("제출");   

var msg = input.value;  //인풋의 글자만 가져올때 value사용.  


if(msg) {

   txt.textContent = msg;
   form.reset(); //입력버튼 누를때 다시빈칸으로 만들어놓기 위해
                 //reset은 인풋태그의내용 모두 한번에 초기화하는 기능
} else {

   feedback.classList.add('show');
   //클래스를 추가할 때 사용 .add('크래스명')

   setTimeout(function() {

     feedback.classList.remove('show');

   }, 2000); 

}





})


//자바스크립트는ms단위로 숫자인식함.