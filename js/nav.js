"use strict";
var windowWidth = $(window).width();
var windowMobile = 992;

$(window).on('load resize', function(){
	windowWidth = $(window).width();
	if(windowWidth > windowMobile){
		$('#menu').removeClass('phone-menu');
		$('#menu').addClass('pc-menu');
	}else{
		$('#menu').removeClass('pc-menu');
		$('#menu').addClass('phone-menu');
	}

});


$(function(){
			$('#nav_toggle').click(function(){
        if($('.global-nav').css('display')==='block'){
          $(".global-nav").slideToggle(500);
        };

				$(".header").toggleClass('open');
				$(".phone-menu").slideToggle(500);
			});

      $('#contact_way').click(function(){
        if($('.phone-menu').css('display')==='block'){
          $(".header").toggleClass('open');
          $(".phone-menu").slideToggle(500);
        };
				$(".global-nav").slideToggle(500);
			});
		});
