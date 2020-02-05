"use strict";
$(document).ready(function(){
  $('.slider').slick({
    // 自動再生するか [初期値:false]
      autoplay: true,
    // 自動再生で切り替えする時間(ミリ秒) [初期値:3000]
      autoplaySpeed: 3000,
    // 前次ボタンを表示するか [初期値:true]
      arrows: false,
    // autoplay:trueのとき、マウスフォーカスしたら一時停止させるか [初期値:true]
      pauseOnFocus: false,
    // autoplay:trueのとき、マウスホバーしたら一時停止させるか [初期値:true]
      pauseOnHover: false,
    // マウスドラッグでスライドの切り替えをするか [初期値:true]
      draggable: true,
    // スライド切り替えをフェードするか [初期値:false]
      fade: true,
  });
});

var windowWidth = $(window).width();
var windowSm = 768;
var windowMobile = 992;

$(function(){
   $("#photo_title1,#about_lecture_photo").click(function(){
     if(windowWidth > windowSm){
       $("#about_online_tutor").hide();
       $("#about_lecture").show();
       $("#about_system").hide();
       var position = $("#about_lecture").offset().top;
       $("body,html").animate({scrollTop:position});
     }
  });
});
$(function(){
   $("#photo_title2,#about_system_photo").click(function(){
     if(windowWidth > windowSm){
       $("#about_online_tutor").hide();
       $("#about_lecture").hide();
       $("#about_system").show();
       var position = $("#about_system").offset().top;
       $("body,html").animate({scrollTop:position});
     }
  });
});
$(function(){
   $("#photo_title3,#about_online_tutor_photo").click(function(){
     if(windowWidth > windowSm){
       $("#about_online_tutor").show();
       $("#about_lecture").hide();
       $("#about_system").hide();
       var position = $("#about_online_tutor").offset().top;
       $("body,html").animate({scrollTop:position});
     }
  });
});

$(function(){
   $("#photo_title4").click(function(){
     if(windowWidth > windowSm){
       $("#about_online_tutor").hide();
       $("#about_lecture").hide();
       $("#about_system").hide();
       var position = $("#liner_title").offset().top;
       $("body,html").animate({scrollTop:position});
     }
  });
});
