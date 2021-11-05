/*
var $profile = $('.profile');
var $profilePopup = $('.profile-popup');

$profile.on ({
 
    mouseenter: function () {
        $(this).parent().find('.profile-popup').show();
    },

    mouseleave: function() {
    	$profilePopup.hipe();
    	}

})
*/




var $profileWrap = $('.profile-wrap');
var $profile = $profileWrap.find('.profile');

$profile.on({
	mouseenter: function() {
		$(this).next().show();
	},

	mouseleave: function() {
        $(this).next().hide();
	}
})