/*$('.owl-carousel').owlCarousel({
  
  
    center: true,
    items: 2,
    loop: false,
    margin:10
    


autoWidth: true,
margin:10,
loop: true,
items: 4

})
*/

/*
$('owl-carousel').owlCarousel({
    //animateOut: 'slideOutDown',
    //animateIn: 'flipInX',
    //stagePadding:30,
    //smartSpeed:450


    items:1,
    margin:30,
    loop: true,

    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
*/

var $owl = $('.owl-carousel');

$owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    
        
});

owl.on('mousewheel', '.owl-stage', function (e) {
      e.preventDefault();
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
  
});
