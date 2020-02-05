"use strict";
//確認画面から戻った時の処理
window.onload = function(){
  var contact = localStorage.getItem("contact");

  if(contact==="無料体験授業"){
    document.getElementById("aboutTaiken").click();
    localStorage.clear();
  }else if (contact==="ご質問・ご相談") {
    document.getElementById("aboutQA").click();
    localStorage.clear();
  }else if(contact==="資料請求"){
    document.getElementById("aboutDocument").click();
    localStorage.clear();
  }
}

$(function(){
   $("#aboutQA").click(function(){
     document.getElementById("lessonDay").style.display="none";
     document.getElementById("subject").style.display="none";
     document.getElementById("customerName").style.display="";
     document.getElementById("customerNameFurigana").style.display="";
     document.getElementById("customerSex").style.display="none";
     document.getElementById("gradeBox").style.display="none";
     document.getElementById("zipcodeOverseas").style.display="none";
     document.getElementById("addressBox").style.display="none";
     document.getElementById("telBox").style.display="none";
     document.getElementById("mailBox").style.display="";
     document.getElementById("QA").style.display="";
   });
});
$(function(){
  $("#aboutTaiken").click(function(){
    document.getElementById("lessonDay").style.display="";
    document.getElementById("subject").style.display="";
    document.getElementById("customerName").style.display="";
    document.getElementById("customerNameFurigana").style.display="";
    document.getElementById("customerSex").style.display="";
    document.getElementById("gradeBox").style.display="";
    document.getElementById("zipcodeOverseas").style.display="";
    document.getElementById("addressBox").style.display="";
    document.getElementById("telBox").style.display="";
    document.getElementById("mailBox").style.display="";
    document.getElementById("QA").style.display="";
  });
});
$(function(){
  $("#aboutDocument").click(function(){
    document.getElementById("lessonDay").style.display="none";
    document.getElementById("subject").style.display="none";
    document.getElementById("customerName").style.display="";
    document.getElementById("customerNameFurigana").style.display="";
    document.getElementById("customerSex").style.display="";
    document.getElementById("gradeBox").style.display="";
    document.getElementById("zipcodeOverseas").style.display="";
    document.getElementById("addressBox").style.display="";
    document.getElementById("telBox").style.display="";
    document.getElementById("mailBox").style.display="";
    document.getElementById("QA").style.display="";
  });
});


$(function(){
   $("#to_chk_gamen").click(function(){
     $('form').validate({
       rules: {
         ext_form_1_1: {
           required: true
         },
         ext_form_2_1: {
           required: true
         },
         contact: {
           required: true
         },
         lesson_day: {
           required: true
         },
         'subject[]': {
           required: true
         },
         first_kanji: {
           required: true
         },
         last_kanji: {
           required: true
         },
         first_kana: {
           required: true,
           katakana: true
         },
         last_kana: {
           required: true,
           katakana: true
         },
         gender: {
           required: true
         },
         grade1: {
           required: true
         },
         school1: {
           required: true
         },
         school2: {
           required: true
         },
         zipcode: {
           required: true,
           maxlength: 7,
           digits: true
         },
         pref_cd: {
           pref_cd_require: true
         },
         city: {
           required: true
         },
         address: {
           required: true
         },
         tel: {
           required: true,
           maxlength: 20,
           digits: true
         },
         email: {
           required: true,
           email: true
         },
         email_confirm: {
           required: true,
           email: true,
           equalTo: '[name=email]'
         }
       },
       messages: {
         ext_form_1_1: "お問い合わせ先を選択してください",
         ext_form_2_1: "教室を選択してください",
         contact: "お問い合わせ内容を選択してください",
         lesson_day: "授業可能な曜日を選択してください",
         'subject[]': "ご検討中の科目を選択してください",
         first_kanji: "姓をご入力ください。",
         last_kanji: "名をご入力ください。",
         first_kana: {
           required: "セイをご入力ください。",
           katakana: "カタカナをご入力ください。"
         },
         last_kana: {
           required: "セイをご入力ください。",
           katakana: "カタカナをご入力ください。"
         },
         gender: "性別を選択してください",
         grade1: "現学年を選択してください",
         school1: "学校名をご入力ください。",
         school2: "学校名をご入力ください。",
         zipcode: "郵便番号をご入力ください。（例:1234567）",
         address: "住所をご入力ください。",
         tel: {
           required: "電話番号をご入力ください。（例:0123456789）",
           maxlength: "正しい電話番号をご入力ください。（例:0123456789）",
           digits: "正しい電話番号をご入力ください。（例:0123456789）"
         },
         email: {
           required: "メールアドレスをご入力ください。",
           email: "正しいメールアドレスをご入力ください。"
         },
         email_confirm: {
           required: "メールアドレスをご入力ください。",
           email: "正しいメールアドレスをご入力ください。",
           equalTo: "同じメールアドレスをご入力ください。"
         }
       },
       groups: {
         school: "school1 school2"
       },
       errorPlacement: function(error, element) {
         if (element.attr("name") == "contact") {
           error.insertAfter(".contact_error");
         }
         else if (element.attr("name") == "lesson_day") {
           error.insertAfter(".lessonDay_error");
         }
         else if (element.attr("name") == "subject[]") {
           error.insertAfter(".subject_error");
         }
         else if (element.attr("name") == "school1" || element.attr("name") == "school2" ) {
           error.insertAfter(".school_error");
         }
         else if(element.attr("name") == "zipcode") {
           error.insertAfter(".zipcode_error");
         }
         else if(element.attr("name") == "address") {
           error.insertAfter(".address_error");
         }
         else if(element.attr("name") == "tel") {
           error.insertAfter(".tel_error");
         }
         else if(element.attr("name") == "teltime") {
           error.insertAfter(".teltime_error");
         }
         else if (element.is(':radio')){
           error.appendTo(element.parent());
         }
         else {
           error.insertAfter(element);
         }
       }
     });

     //失敗で戻る
     if (!$('form').valid()) {
       return false;
     }else{

       localStorage.setItem('contact', $("[name=contact]:checked").val());
       localStorage.setItem('lesson_day', inq_checked('lesson_day'));
       localStorage.setItem('elem_subject', inq_checked('elem'));
       localStorage.setItem('junior_subject', inq_checked('junior'));
       localStorage.setItem('high_subject', inq_checked('high'));
       localStorage.setItem('first_kanji', $("#first_kanji").val());
       localStorage.setItem('last_kanji', $("#last_kanji").val());
       localStorage.setItem('first_kana', $("#first_kana").val());
       localStorage.setItem('last_kana', $("#last_kana").val());
       localStorage.setItem('gender', $("[name=gender]:checked").val());
       localStorage.setItem('grade1', $("#grade1 option:selected").text());
       localStorage.setItem('zipcode', $("#zipcode").val());
       localStorage.setItem('overseas', $("[name=overseas]:checked").val());
       localStorage.setItem('address', $("#address").val());
       localStorage.setItem('tel', $("#tel").val());
       localStorage.setItem('teltime', $("#teltime option:selected").text());
       localStorage.setItem('email', $("#email").val());
       localStorage.setItem('ext_form_1', $("#ext_form_1").val());
       window.location.href='./confirm.html'

       function inq_checked(className){
          var totalCheck = '"';
          var elements = document.getElementsByClassName(className);
          for(var i = 0 ; i < elements.length ; i ++){
          if(elements[i].checked == true){
            if(totalCheck !== '"'){
              totalCheck += ',' + elements[i].value
            }else{
              totalCheck = elements[i].value
            }
          }
          }
          if(totalCheck === '"'){
            totalCheck = '';
          }
          return totalCheck
       }
     }
   });
});
