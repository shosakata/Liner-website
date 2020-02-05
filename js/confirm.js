"use strict";
window.onload = function(){
// ページ読み込み時に実行したい処理
var contact = localStorage.getItem("contact");
var lesson_day = localStorage.getItem("lesson_day");
var elem_subject = localStorage.getItem("elem_subject");
var junior_subject = localStorage.getItem("junior_subject");
var high_subject = localStorage.getItem("high_subject");
var first_kanji = localStorage.getItem("first_kanji");
var last_kanji = localStorage.getItem("last_kanji");
var first_kana = localStorage.getItem("first_kana");
var last_kana = localStorage.getItem("last_kana");
var gender = localStorage.getItem("gender");
var grade1 = localStorage.getItem("grade1");
var zipcode = localStorage.getItem("zipcode");
var overseas = localStorage.getItem("overseas");
var address = localStorage.getItem("address");
var tel = localStorage.getItem("tel");
var teltime = localStorage.getItem("teltime");
var email = localStorage.getItem("email");
var ext_form_1 = localStorage.getItem("ext_form_1");

  $('#contact').html(contact);
  $("#first_kanji").html(first_kanji);
  $("#last_kanji").html(last_kanji);
  $("#first_kana").html(first_kana);
  $("#last_kana").html(last_kana);
  $("#ext_form_1").html(ext_form_1);

  if(contact==="無料体験授業"){
    $('#lesson_day').html(lesson_day);
    if(elem_subject){$("#elem-subject").html("小学生："+elem_subject);}
    if(junior_subject){$("#junior-subject").html("中学生："+junior_subject);}
    if(high_subject){$("#high-subject").html("高校生："+high_subject);}
    $("#email").html(email);
    $("#gender").html(gender);
    $("#grade1").html(grade1);
    if(overseas==="海外"){$("#zipcode").html("海外在住のため郵便番号なし");}else{$("#zipcode").html(zipcode);}
    $("#address").html(address);
    $("#tel").html("電話番号："+tel);
    $("#teltime").html("希望ご連絡時間帯："+teltime);

  }else if(contact==="ご質問・ご相談"){
    $("#email").html(email);
    document.getElementById("lessonDay").style.display="none";
    document.getElementById("subject").style.display="none";
    document.getElementById("customerSex").style.display="none";
    document.getElementById("gradeBox").style.display="none";
    document.getElementById("zipcodeOverseas").style.display="none";
    document.getElementById("addressBox").style.display="none";
    document.getElementById("telBox").style.display="none";

  }else if(contact==="資料請求"){
    $("#gender").html(gender);
    $("#grade1").html(grade1);
    if(overseas==="海外"){$("#zipcode").html("海外在住のため郵便番号なし");}else{$("#zipcode").html(zipcode);}
    $("#address").html(address);
    $("#tel").html("電話番号："+tel);
    $("#email").html(email);
    document.getElementById("lessonDay").style.display="none";
    document.getElementById("subject").style.display="none";
  }
}

$(function(){
   $("#sendMail").click(function(){
     $("#sendMail").prop("disabled", true);
     var contact = localStorage.getItem("contact");
     var lesson_day = localStorage.getItem("lesson_day");
     var elem_subject = localStorage.getItem("elem_subject");
     var junior_subject = localStorage.getItem("junior_subject");
     var high_subject = localStorage.getItem("high_subject");
     var first_kanji = localStorage.getItem("first_kanji");
     var last_kanji = localStorage.getItem("last_kanji");
     var first_kana = localStorage.getItem("first_kana");
     var last_kana = localStorage.getItem("last_kana");
     var gender = localStorage.getItem("gender");
     var grade1 = localStorage.getItem("grade1");
     var zipcode = localStorage.getItem("zipcode");
     var overseas = localStorage.getItem("overseas");
     var address = localStorage.getItem("address");
     var tel = localStorage.getItem("tel");
     var teltime = localStorage.getItem("teltime");
     var email = localStorage.getItem("email");
     var ext_form_1 = localStorage.getItem("ext_form_1");

        var ajax_data = JSON.parse('{"js_url":"./nodejs/contact-mail.js"'
                                  +',"contact":'+'"'+contact+'"'
                                  +',"lesson_day":'+'"'+lesson_day+'"'
                                  +',"elem_subject":'+'"'+elem_subject+'"'
                                  +',"junior_subject":'+'"'+junior_subject+'"'
                                  +',"high_subject":'+'"'+high_subject+'"'
                                  +',"first_kanji":'+'"'+first_kanji+'"'
                                  +',"last_kanji":'+'"'+last_kanji+'"'
                                  +',"first_kana":'+'"'+first_kana+'"'
                                  +',"last_kana":'+'"'+last_kana+'"'
                                  +',"gender":'+'"'+gender+'"'
                                  +',"grade1":'+'"'+grade1+'"'
                                  +',"zipcode":'+'"'+zipcode+'"'
                                  +',"overseas":'+'"'+overseas+'"'
                                  +',"address":'+'"'+address+'"'
                                  +',"tel":'+'"'+tel+'"'
                                  +',"teltime":'+'"'+teltime+'"'
                                  +',"email":'+'"'+email+'"'
                                  +',"ext_form_1":'+'"'+ext_form_1+'"'
                                  +'}');
       $.ajax({
         url: 'http://',
         type: 'POST',
         data: ajax_data,
         dataType: 'json'
       }).done(function(res){
         console.log(res)
         document.getElementById("reviseContent").style.display="none";
         document.getElementById("sendMail").style.display="none";
         $('.btns').html("送信が完了しました");
       }).fail(function(xhr, status, error){
         alert(status);
         console.log("XMLHttpRequest : " + xhr.status);
         console.log("textStatus     : " + status);
         console.log("errorThrown    : " + error);
       });


  });
});
