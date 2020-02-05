"use strict";
window.onload = function(){
// ページ読み込み時に実行したい処理
var first_kanji = localStorage.getItem("first_kanji");
var last_kanji = localStorage.getItem("last_kanji");
var first_kana = localStorage.getItem("first_kana");
var last_kana = localStorage.getItem("last_kana");
var gender = localStorage.getItem("gender");
var grade1 = localStorage.getItem("grade1");
var grade2 = localStorage.getItem("grade2");
var work_day = localStorage.getItem("work_day");
var major = localStorage.getItem("major");
var elem_subject = localStorage.getItem("elem_subject");
var junior_subject = localStorage.getItem("junior_subject");
var high_subject = localStorage.getItem("high_subject");
var b_year1 = localStorage.getItem("b_year1");
var b_month1 = localStorage.getItem("b_month1");
var b_day1 = localStorage.getItem("b_day1");
var b_year2 = localStorage.getItem("b_year2");
var b_month2 = localStorage.getItem("b_month2");
var b_day2 = localStorage.getItem("b_day2");
var b_year3 = localStorage.getItem("b_year3");
var b_month3 = localStorage.getItem("b_month3");
var b_day3 = localStorage.getItem("b_day3");
var tel = localStorage.getItem("tel");
var teltime = localStorage.getItem("teltime");
var email = localStorage.getItem("email");
var ext_form_1 = localStorage.getItem("ext_form_1");

  $("#first_kanji").html(first_kanji);
  $("#last_kanji").html(last_kanji);
  $("#first_kana").html(first_kana);
  $("#last_kana").html(last_kana);
  $("#gender").html(gender);
  $("#grade1").html(grade1);
  $("#grade2").html(grade2);
  $("#workDay").html(work_day);
  $("#major").html(major);
  if(elem_subject){$("#elem-subject").html("小学生："+elem_subject);}
  if(junior_subject){$("#junior-subject").html("中学生："+junior_subject);}
  if(high_subject){$("#high-subject").html("高校生："+high_subject);}
  $("#interviewDate1").html(b_year1+"年"+b_month1+"月"+b_day1+"日");
  $("#interviewDate2").html(b_year2+"年"+b_month2+"月"+b_day2+"日");
  $("#interviewDate3").html(b_year3+"年"+b_month3+"月"+b_day3+"日");
  $("#tel").html("電話番号："+tel);
  $("#teltime").html("希望ご連絡時間帯："+teltime);
  $("#email").html(email);
  $("#ext_form_1").html(ext_form_1);
}

$(function(){
   $("#sendMail").click(function(){
     $("#sendMail").prop("disabled", true);
     var first_kanji = localStorage.getItem("first_kanji");
     var last_kanji = localStorage.getItem("last_kanji");
     var first_kana = localStorage.getItem("first_kana");
     var last_kana = localStorage.getItem("last_kana");
     var gender = localStorage.getItem("gender");
     var grade1 = localStorage.getItem("grade1");
     var grade2 = localStorage.getItem("grade2");
     var work_day = localStorage.getItem("work_day");
     var major = localStorage.getItem("major");
     var elem_subject = localStorage.getItem("elem_subject");
     var junior_subject = localStorage.getItem("junior_subject");
     var high_subject = localStorage.getItem("high_subject");
     var b_year1 = localStorage.getItem("b_year1");
     var b_month1 = localStorage.getItem("b_month1");
     var b_day1 = localStorage.getItem("b_day1");
     var b_year2 = localStorage.getItem("b_year2");
     var b_month2 = localStorage.getItem("b_month2");
     var b_day2 = localStorage.getItem("b_day2");
     var b_year3 = localStorage.getItem("b_year3");
     var b_month3 = localStorage.getItem("b_month3");
     var b_day3 = localStorage.getItem("b_day3");
     var tel = localStorage.getItem("tel");
     var teltime = localStorage.getItem("teltime");
     var email = localStorage.getItem("email");
     var ext_form_1 = localStorage.getItem("ext_form_1");

        var ajax_data = JSON.parse('{"js_url":"./nodejs/register-mail.js"'
                                  +',"first_kanji":'+'"'+first_kanji+'"'
                                  +',"last_kanji":'+'"'+last_kanji+'"'
                                  +',"first_kana":'+'"'+first_kana+'"'
                                  +',"last_kana":'+'"'+last_kana+'"'
                                  +',"gender":'+'"'+gender+'"'
                                  +',"grade1":'+'"'+grade1+'"'
                                  +',"grade2":'+'"'+grade2+'"'
                                  +',"work_day":'+'"'+work_day+'"'
                                  +',"major":'+'"'+major+'"'
                                  +',"elem_subject":'+'"'+elem_subject+'"'
                                  +',"junior_subject":'+'"'+junior_subject+'"'
                                  +',"high_subject":'+'"'+high_subject+'"'
                                  +',"b_year1":'+'"'+b_year1+'"'
                                  +',"b_month1":'+'"'+b_month1+'"'
                                  +',"b_day1":'+'"'+b_day1+'"'
                                  +',"b_year2":'+'"'+b_year2+'"'
                                  +',"b_month2":'+'"'+b_month2+'"'
                                  +',"b_day2":'+'"'+b_day2+'"'
                                  +',"b_year3":'+'"'+b_year3+'"'
                                  +',"b_month3":'+'"'+b_month3+'"'
                                  +',"b_day3":'+'"'+b_day3+'"'
                                  +',"tel":'+'"'+tel+'"'
                                  +',"teltime":'+'"'+teltime+'"'
                                  +',"email":'+'"'+email+'"'
                                  +',"ext_form_1":'+'"'+ext_form_1.replace(/\r?\n/g, '')+'"'
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
