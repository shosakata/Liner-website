//教師登録フォームの入力チェックにて使用
$(function(){

  //カレンダーアイコンからの選択でエラー解除
  $('.calendarIcon1').change(function(){
    $("#interviewDate1").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#interviewDate").find('label[for="interviewDate1"]').remove();
  });
  $('.calendarIcon2').change(function(){
    $("#interviewDate2").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#interviewDate").find('label[for="interviewDate2"]').remove();
  });
  $('.calendarIcon3').change(function(){
    $("#interviewDate3").find('input[type="text"], input[type="tel"], select').removeClass('error');
    $("#interviewDate").find('label[for="interviewDate3"]').remove();
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
  //});
});
