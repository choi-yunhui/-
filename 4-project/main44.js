var $close_text = $(".close_text");
var $open_text = $(".open_text");
var $list_title_wrap = $(".list_title_wrap");
var $list_article_wrap = $(".list_article_wrap");


$close_text.click(function(){

	$close_text.hide();
	$open_text.show();
	$list_article_wrap.addClass('hide');

})

$open_text.click(function(){

	$open_text.hide();
	$close_text.show();
	$list_article_wrap.removeClass('hide');

})




$list_title_wrap.click(function() {
	$(this).next().toggleClass('hide');

	var hideLength = $('.list_article_wrap.hide').length;

	if (hideLength === 4 ){
		$close_text.hide();
		$open_text.show();
		console.log('모두접기');

		console.log(hideLength, hideLength === 4);
	}


		if (hideLength === 0 ){
		$open_text.hide();
		$close_text.show();

		console.log('모두펴기');
	}

})
