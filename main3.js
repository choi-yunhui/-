

var fixedNav = document.querySelector('nav');


/*
window.addEventListener('scroll', function() {  
   var top = window.scrollY || window.pageYOfset 
                            || document.documentElement.scrollTop 
                            || document.body.scrollTop;

/*
 if(top > 50) {
    fixedNav.classList.add('active');

 } else {
     fixedNav.classList.remove('active');
 }



    (top > 50)
         ? fixedNav.classList.add('active')
         : fixedNav.classList.remove('active');  


})

*/

//스크롤을 최상단이 아니라 현재보다 올릴 때 색이 변하려면


var oldVal = 0;

window.addEventListener('scroll', function() {
    var newVal =  window.scrollY || window.pageYOfset 
                                 || document.documentElement.scrollTop 
                                 || document.body.scrollTop;


if(oldVal - newVal < 0) {
  fixedNav.classList.add('active');

}

if(oldVal - newVal > 0) {
  fixedNav.classList.remove('active');
}

oldVal = newVal; //스크롤내릴때마다 뉴밸이올드밸로들어감

})
//이외 두가지 방법


