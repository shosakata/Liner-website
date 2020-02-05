//お問い合わせフォームの入力チェックにて使用
$(function(){

  $('#overseas').change(function(){
    var $check = $(this).prop('checked');
    if($check){
      $(this).closest('ul').find('input[type="text"], input[type="tel"], select').prop('disabled', true);
      $(this).closest('ul').find('input[type="text"], input[type="tel"], select').removeClass('error');
      $(this).closest('ul').find("label.error").remove();
    } else {
      $(this).closest('ul').find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    }
  });

  //カレンダーアイコンからの選択でエラー解除
  $('.calendarIcon1').change(function(){
    $("#taikenDate1").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#taikenDate").find('label[for="taikenDate1"]').remove();
  });
  $('.calendarIcon2').change(function(){
    $("#taikenDate2").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#taikenDate").find('label[for="taikenDate2"]').remove();
  });
  $('.calendarIcon3').change(function(){
    $("#taikenDate3").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#taikenDate").find('label[for="taikenDate3"]').remove();
  });


  //無料体験授業ボタン押下時のチェック対象外の項目の対応
  $('#aboutTaiken').on('click', function(){
    $("#lessonDay").find('input[type="checkbox"], input[type="tel"], select').prop('disabled', false);
    $("#subject").find('input[type="checkbox"], input[type="tel"], select').prop('disabled', false);
    // $("#taikenDate").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#customerSex").find('input[type="radio"], input[type="tel"], select').prop('disabled', false);
    $("#gradeBox").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#zipcodeOverseas").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#addressBox").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#telBox").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
  });

  //ご質問・ご相談ボタン押下時のチェック対象外の項目の対応
  $('#aboutQA').on('click', function(){
    $("#lessonDay").find('input[type="checkbox"], input[type="tel"], select').prop('disabled', true);
    $("#lessonDay").find('input[type="checkbox"], input[type="tel"], select').removeClass('error');
    $("#lessonDay").find("label.error").remove();

    $("#subject").find('input[type="checkbox"], input[type="tel"], select').prop('disabled', true);
    $("#subject").find('input[type="checkbox"], input[type="tel"], select').removeClass('error');
    $("#subject").find("label.error").remove();

    // $("#taikenDate").find('input[type="text"], input[type="tel"], select').prop('disabled', true);
    // $("#taikenDate").find('input[type="text"], input[type="tel"], select').removeClass('error');
    // $("#taikenDate").find("label.error").remove();

    $("#customerSex").find('input[type="radio"], input[type="tel"], select').prop('disabled', true);
    $("#customerSex").find('input[type="radio"], input[type="tel"], select').removeClass('error');
    $("#customerSex").find("label.error").remove();

    $("#gradeBox").find('input[type="text"], input[type="tel"], select').prop('disabled', true);
    $("#gradeBox").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#gradeBox").find("label.error").remove();

    $("#zipcodeOverseas").find('input[type="text"], input[type="tel"], select').prop('disabled', true);
    $("#zipcodeOverseas").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#zipcodeOverseas").find("label.error").remove();

    $("#addressBox").find('input[type="text"], input[type="tel"], select').prop('disabled', true);
    $("#addressBox").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#addressBox").find("label.error").remove();

    $("#telBox").find('input[type="text"], input[type="tel"], select').prop('disabled', true);
    $("#telBox").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#telBox").find("label.error").remove();
  });

  //資料請求ボタン押下時のチェック対象外の項目の対応
  $('#aboutDocument').on('click', function(){
    $("#lessonDay").find('input[type="checkbox"], input[type="tel"], select').prop('disabled', true);
    $("#lessonDay").find('input[type="checkbox"], input[type="tel"], select').removeClass('error');
    $("#lessonDay").find("label.error").remove();

    $("#subject").find('input[type="checkbox"], input[type="tel"], select').prop('disabled', true);
    $("#subject").find('input[type="checkbox"], input[type="tel"], select').removeClass('error');
    $("#subject").find("label.error").remove();

    $("#customerSex").find('input[type="radio"], input[type="tel"], select').prop('disabled', false);
    $("#gradeBox").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#zipcodeOverseas").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#addressBox").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
    $("#telBox").find('input[type="text"], input[type="tel"], select').prop('disabled', false);
  });


  $('.agreeMore').on('click', function(){
    $(this).hide().prev().toggleClass('on');
    $(this).next().show();
  });


  $.fn.autoKana('#first_kanji', '#first_kana', {
    katakana : true
  });
  $.fn.autoKana('#last_kanji', '#last_kana', {
    katakana : true
  });


  if ($('#overseas').prop('checked')) {
      $('#overseas').closest('ul').find('input[type="text"], input[type="tel"], select').prop('disabled', true);
  } else {
      $('#overseas').closest('ul').find('input[type="text"], input[type="tel"], select').prop('disabled', false);
  }

    $('input[type="submit"]').on('click', function(){
        $('#overseasval').val($('#overseas').prop('checked'))
    });

    $('#first_kanji').change(function () {
        $('input#first_kana').trigger("focus");
        $('input#first_kana').trigger("blur");
    });

    $('#last_kanji').change(function () {
        $('input#last_kana').trigger("focus");
        $('input#last_kana').trigger("blur");
    });
    $('#zipcode').change(function () {
        AjaxZip3.zip2addr('zipcode','','pref_cd','city');
        $('select#pref_cd').trigger("focus");
        $('select#pref_cd').trigger("blur");
    });
});
