var arr [

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