"use strict";
//確認画面から戻った時の処理
window.onload = function(){
  var b_year1 = localStorage.getItem("b_year1");
  var b_month1 = localStorage.getItem("b_month1");
  var b_day1 = localStorage.getItem("b_day1");
  var b_year2 = localStorage.getItem("b_year2");
  var b_month2 = localStorage.getItem("b_month2");
  var b_day2 = localStorage.getItem("b_day2");
  var b_year3 = localStorage.getItem("b_year3");
  var b_month3 = localStorage.getItem("b_month3");
  var b_day3 = localStorage.getItem("b_day3");


  $("#b_year1").val(b_year1);
  $("#b_month1").val(b_month1);
  $("#b_day1").val(b_day1);
  $("#b_year2").val(b_year2);
  $("#b_month2").val(b_month2);
  $("#b_day2").val(b_day2);
  $("#b_year3").val(b_year3);
  $("#b_month3").val(b_month3);
  $("#b_day3").val(b_day3);
  localStorage.clear();
}

//第一希望日のdatepicker
$(function(){
  $(".calendarIcon1").datepicker({
     buttonImage: "images/calendar.jpg",        // カレンダーアイコン画像
     buttonImageOnly: true,           // 画像として表示
     showOn: "both"                   // カレンダー呼び出し元の定義
   });
//現在の年数オブジェクトを4桁で生成
var time = new Date();
var year = time.getFullYear()+3;//未来３年後
var nowyear = time.getFullYear();
//未来3年後まで表示
for (var i = year; i >= nowyear ; i--) {
    $('#b_year1').append('<option value="' + i + '">' + i + '</option>');
}

//1～12の数字を生成
for (var i = 1; i <= 12; i++) {
    if (i < 10) {
  i = '0' + i;
    }
  $('#b_month1').append('<option value="' + i + '">' + i + '</option>');
}

//1～31の数字を生成
for (var i = 1; i <= 31; i++) {
    if (i < 10) {
  i = '0' + i;
    }
  $('#b_day1').append('<option value="' + i + '">' + i + '</option>');
}

    //カレンダーからプルダウンを更新
    $('.calender1').each(function() {
        var id = '#' + $(this).attr('id');
        $(id + ' input').bind('change', function() {
            var i = 0;
            var dates = $(this).val().split('/');
            $(id + ' select').each(function() {
                $(this).val(dates[i]);
                i++;
            });
        });
    });


    //プルダウンからカレンダーを更新
    $('.calender1').each(function() {
        var id = '#' + $(this).attr('id');
        $(id + ' select').bind('change', function() {
            var i = 0;
            var dates = new Array(3);
            $(id + ' select').each(function() {
                dates[i] = $(this).val();
                i++;
            });
            var newdate = dates[0] + '/' + dates[1] + '/' + dates[2];
            $(id + ' input').val(newdate);
        });
    });

    //カレンダーの表示
    var date = new Date();
    var year = date.getFullYear();
    $.datepicker.setDefaults({
        showOn: 'button',
        buttonImage: '',
        buttonText: '<span class="textlink" style="font-size:93%">カレンダーから入力</span>',
        buttonImageOnly: false,
        closeText: '閉じる',
        prevText: '<前 ',
        nextText: ' 次>',
        currentText: '今日',
        monthNames: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        dayNamesMin: ['日','月','火','水','木','金','土'],
        weekHeader: '週',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年',
        minDate: new Date(year, 1 - 1, 1),
        maxDate: new Date(year + 1, 12 - 1, 31)
    });
    $('.calender1 input').datepicker();
    //$('#ui-datepicker-div').hide();

});

//第二希望日のdatepicker
$(function(){
  $(".calendarIcon2").datepicker({
     buttonImage: "images/calendar.jpg",        // カレンダーアイコン画像
     buttonImageOnly: true,           // 画像として表示
     showOn: "both"                   // カレンダー呼び出し元の定義
   });

//現在の年数オブジェクトを4桁で生成
var time = new Date();
var year = time.getFullYear()+3;//未来３年後
var nowyear = time.getFullYear();
//未来3年後まで表示
for (var i = year; i >= nowyear ; i--) {
    $('#b_year2').append('<option value="' + i + '">' + i + '</option>');
}
//1～12の数字を生成
for (var i = 1; i <= 12; i++) {
    if (i < 10) {
  i = '0' + i;
    }
  $('#b_month2').append('<option value="' + i + '">' + i + '</option>');
}
//1～31の数字を生成
for (var i = 1; i <= 31; i++) {
    if (i < 10) {
  i = '0' + i;
    }
  $('#b_day2').append('<option value="' + i + '">' + i + '</option>');
}

    //カレンダーからプルダウンを更新
    $('.calender2').each(function() {
        var id = '#' + $(this).attr('id');
        $(id + ' input').bind('change', function() {
            var i = 0;
            var dates = $(this).val().split('/');
            $(id + ' select').each(function() {
                $(this).val(dates[i]);
                i++;
            });
        });
    });

    //プルダウンからカレンダーを更新
    $('.calender2').each(function() {
        var id = '#' + $(this).attr('id');
        $(id + ' select').bind('change', function() {
            var i = 0;
            var dates = new Array(3);
            $(id + ' select').each(function() {
                dates[i] = $(this).val();
                i++;
            });
            var newdate = dates[0] + '/' + dates[1] + '/' + dates[2];
            $(id + ' input').val(newdate);
        });
    });

    //カレンダーの表示
    var date = new Date();
    var year = date.getFullYear();
    $.datepicker.setDefaults({
        showOn: 'button',
        buttonImage: '',
        buttonText: '<span class="textlink" style="font-size:93%">カレンダーから入力</span>',
        buttonImageOnly: false,
        closeText: '閉じる',
        prevText: '<前 ',
        nextText: ' 次>',
        currentText: '今日',
        monthNames: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        dayNamesMin: ['日','月','火','水','木','金','土'],
        weekHeader: '週',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年',
        minDate: new Date(year, 1 - 1, 1),
        maxDate: new Date(year + 1, 12 - 1, 31)
    });
    $('.calender2 input').datepicker();
    //$('#ui-datepicker-div').hide();
});

//第三希望日のdatepicker
$(function(){
  $(".calendarIcon3").datepicker({
     buttonImage: "images/calendar.jpg",        // カレンダーアイコン画像
     buttonImageOnly: true,           // 画像として表示
     showOn: "both"                   // カレンダー呼び出し元の定義
   });

//現在の年数オブジェクトを4桁で生成
var time = new Date();
var year = time.getFullYear()+3;//未来３年後
var nowyear = time.getFullYear();
//未来3年後まで表示
for (var i = year; i >= nowyear ; i--) {
    $('#b_year3').append('<option value="' + i + '">' + i + '</option>');
}
//1～12の数字を生成
for (var i = 1; i <= 12; i++) {
    if (i < 10) {
  i = '0' + i;
    }
  $('#b_month3').append('<option value="' + i + '">' + i + '</option>');
}
//1～31の数字を生成
for (var i = 1; i <= 31; i++) {
    if (i < 10) {
  i = '0' + i;
    }
  $('#b_day3').append('<option value="' + i + '">' + i + '</option>');
}

    //カレンダーからプルダウンを更新
    $('.calender3').each(function() {
        var id = '#' + $(this).attr('id');
        $(id + ' input').bind('change', function() {
            var i = 0;
            var dates = $(this).val().split('/');
            $(id + ' select').each(function() {
                $(this).val(dates[i]);
                i++;
            });
        });
    });

    //プルダウンからカレンダーを更新
    $('.calender3').each(function() {
        var id = '#' + $(this).attr('id');
        $(id + ' select').bind('change', function() {
            var i = 0;
            var dates = new Array(3);
            $(id + ' select').each(function() {
                dates[i] = $(this).val();
                i++;
            });
            var newdate = dates[0] + '/' + dates[1] + '/' + dates[2];
            $(id + ' input').val(newdate);
        });
    });

    //カレンダーの表示
    var date = new Date();
    var year = date.getFullYear();
    $.datepicker.setDefaults({
        showOn: 'button',
        buttonImage: '',
        buttonText: '<span class="textlink" style="font-size:93%">カレンダーから入力</span>',
        buttonImageOnly: false,
        closeText: '閉じる',
        prevText: '<前 ',
        nextText: ' 次>',
        currentText: '今日',
        monthNames: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        dayNamesMin: ['日','月','火','水','木','金','土'],
        weekHeader: '週',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年',
        minDate: new Date(year, 1 - 1, 1),
        maxDate: new Date(year + 1, 12 - 1, 31)
    });
    $('.calender3 input').datepicker();
    //$('#ui-datepicker-div').hide();
});

$(function(){
   $("#to_chk_gamen").click(function(){

     $('form').validate({
       rules: {
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
         major: {
           required: true
         },
         b_year1: {
           required: true
         },
         b_month1: {
           required: true
         },
         b_day1: {
           required: true
         },
         b_year2: {
           required: true
         },
         b_month2: {
           required: true
         },
         b_day2: {
           required: true
         },
         b_year3: {
           required: true
         },
         b_month3: {
           required: true
         },
         b_day3: {
           required: true
         },
         grade1: {
           required: true
         },
         grade2: {
           required: true
         },
         work_day: {
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
           maxlength: 11,
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
         'subject[]': "指導可能な科目を選択してください（複数選択可）",
         first_kanji: "姓をご入力ください",
         last_kanji: "名をご入力ください",
         first_kana: "セイをご入力ください",
         last_kana: "メイをご入力ください",
         gender: "性別を選択してください",
         major: "科類・学部学科・研究科専攻をご入力ください",
         b_year1: "第一希望日を選択してください",
         b_month1: "第一希望日を選択してください",
         b_day1: "第一希望日を選択してください",
         b_year2: "第二希望日を選択してください",
         b_month2: "第二希望日を選択してください",
         b_day2: "第二希望日を選択してください",
         b_year3: "第三希望日を選択してください",
         b_month3: "第三希望日を選択してください",
         b_day3: "第三希望日を選択してください",
         grade1: "現学年を選択してください",
         grade2: "指導可能な生徒を選択してください（複数選択可）",
         work_day: "指導可能な曜日を選択してください（複数選択可）",
         zipcode: "郵便番号をご入力ください（例:1234567）",
         address: "住所をご入力ください",
         tel: {
           required: "電話番号をご入力ください（例:0123456789）",
           maxlength: "正しい電話番号をご入力ください（例:0123456789）",
           digits: "正しい電話番号をご入力ください（例:0123456789）"
         },
         email: {
           required: "メールアドレスをご入力ください",
           email: "正しいメールアドレスをご入力ください"
         },
         email_confirm: {
           required: "メールアドレスをご入力ください",
           email: "正しいメールアドレスをご入力ください",
           equalTo: "同じメールアドレスをご入力ください"
         }
       },
       groups: {
         interviewDate1: "b_year1 b_month1 b_day1",
         interviewDate2: "b_year2 b_month2 b_day2",
         interviewDate3: "b_year3 b_month3 b_day3",
       },
       errorPlacement: function(error, element) {
         if (element.attr("name") == "contact") {
           error.insertAfter(".contact_error");
         }
         else if (element.attr("name") == "subject[]") {
           error.insertAfter(".subject_error");
         }
         else if (element.attr("name") == "b_year1" || element.attr("name") == "b_month1" || element.attr("name") == "b_day1"
          || element.attr("name") == "b_year2" || element.attr("name") == "b_month2" || element.attr("name") == "b_day2"
          || element.attr("name") == "b_year3" || element.attr("name") == "b_month3" || element.attr("name") == "b_day3"
         ) {
           error.insertBefore(".interviewDate_error");
         }
         else if (element.attr("name") == "school1" || element.attr("name") == "school2" ) {
           error.insertAfter(".school_error");
         }
         else if (element.attr("name") == "gender") {
           error.insertAfter(".gender_error");
         }
         else if (element.attr("name") == "grade2") {
           error.insertAfter(".grade2_error");
         }
         else if (element.attr("name") == "work_day") {
           error.insertAfter(".workDay_error");
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

     localStorage.clear();
     localStorage.setItem('first_kanji', $("#first_kanji").val());
     localStorage.setItem('last_kanji', $("#last_kanji").val());
     localStorage.setItem("first_kana", $("#first_kana").val());
     localStorage.setItem('last_kana', $("#last_kana").val());
     localStorage.setItem('gender', $("[name=gender]:checked").val());
     localStorage.setItem('grade1', $("#grade1 option:selected").text());
     localStorage.setItem('grade2', inq_checked('grade2'));
     localStorage.setItem('work_day', inq_checked('work_day'));
     localStorage.setItem('major', $("#major").val());
     localStorage.setItem('elem_subject', inq_checked('elem'));
     localStorage.setItem('junior_subject', inq_checked('junior'));
     localStorage.setItem('high_subject', inq_checked('high'));
     localStorage.setItem('b_year1', $("#b_year1 option:selected").text());
     localStorage.setItem('b_month1', $("#b_month1 option:selected").text());
     localStorage.setItem('b_day1', $("#b_day1 option:selected").text());
     localStorage.setItem('b_year2', $("#b_year2 option:selected").text());
     localStorage.setItem('b_month2', $("#b_month2 option:selected").text());
     localStorage.setItem('b_day2', $("#b_day2 option:selected").text());
     localStorage.setItem('b_year3', $("#b_year3 option:selected").text());
     localStorage.setItem('b_month3', $("#b_month3 option:selected").text());
     localStorage.setItem('b_day3', $("#b_day3 option:selected").text());
     localStorage.setItem('tel', $("#tel").val());
     localStorage.setItem('teltime', $("#teltime option:selected").text());
     localStorage.setItem('email', $("#email").val());
     localStorage.setItem('ext_form_1', $("#ext_form_1").val());
     window.location.href='./confirm-register-tutor.html'

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
