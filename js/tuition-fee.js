"use strict";
$(function(){
   $("#check-tuition").click(function(){
     var position = $("#about-tuition").offset().top - $(".page-header").offset().top;
     $("body,html").animate({scrollTop:position});
  });
});
$(function(){
   $(".check-test").click(function(){
     var position = $("#about-test").offset().top - $(".page-header").offset().top;
     $("body,html").animate({scrollTop:position});
  });
});
