var btns = document.querySelectorAll('.accordion');

btns.forEach(function(btn) {

  btn.addEventListener('click', function() {

    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    console.log(panel.scrollheight);

   if(panel.style.maxHeight){
       panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   }



  })


})

//다다음것 것택하려면  var panel = this.nextElementSiblig.nextElementSiblig이런식으로