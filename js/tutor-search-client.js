"use strict";
$(function(){
   $("#searchBtn").click(function(){
     var first = true;
     var per_page = 5;
     var page_no = 1;
     var page_range = 5;
     tutorListGet(first, per_page, page_no, page_range)
  });
});
function tutorListGet(first, per_page, page_no, page_range){

       var $searchForm = $("#js-search");
       var $listSec = $("#js-teacher-list");
       var $pageNavi = $("#js-page-navi");
       var bunri_val = inq_checked('bunri');
       var sex_val = inq_checked('gender');
       var elem_coachable_flg_val = grade_flg('elem');
       var junior_coachable_flg_val = grade_flg('junior');
       var consis_coachable_flg_val = grade_flg('consistency');
       var high_coachable_flg_val = grade_flg('high');
       var ob_coachable_flg_val = grade_flg('ob');
       var elem_arithmetic_flg_val = grade_flg('elem-arithmetic');
       var elem_japanese_flg_val = grade_flg('elem-japanese');
       var elem_science_flg_val = grade_flg('elem-science');
       var elem_sociology_flg_val = grade_flg('elem-sociology');
       var elem_english_flg_val = grade_flg('elem-english');
       var elem_others_flg_val = "0";
       var junior_math_flg_val = grade_flg('junior-math');
       var junior_japanese_flg_val = grade_flg('junior-japanese');
       var junior_english_flg_val = grade_flg('junior-english');
       var junior_science_flg_val = grade_flg('junior-science');
       var junior_sociology_flg_val = grade_flg('junior-sociology');
       var junior_others_flg_val = "0";
       var high_math_flg_val = grade_flg('high-math');
       var high_japanese_flg_val = grade_flg('high-japanese');
       var high_english_flg_val = grade_flg('high-english');
       var high_physics_flg_val = grade_flg('high-physics');
       var high_chemistry_flg_val = grade_flg('high-chemistry');
       var high_biology_flg_val = grade_flg('high-biology');
       var high_geology_flg_val = grade_flg('high-geology');
       var japanese_history_flg_val = grade_flg('japanese-history');
       var world_history_flg_val = grade_flg('world-history');
       var high_geography_flg_val = grade_flg('high-geography');
       var current_sociery_flg_val = grade_flg('current-sociery');
       var high_sociery_flg_val = grade_flg('high-sociery');
       var essay_flg_val = grade_flg('essay');
       var high_others_flg_val = "0";
       var hometown_val = '"' + document.getElementById("hometown").value + '"';
       var pk_code_type_no_val = inq_checked('subject');
       var max_score_val = inq_num_checked('deviation');
       var ajax_data = JSON.parse('{"js_url":"./nodejs/tutor-search-server.js"'
                                 +',"bunri_val":'+'"'+bunri_val+'"'
                                 +',"sex_val":'+'"'+sex_val+'"'
                                 +',"elem_coachable_flg_val":'+elem_coachable_flg_val
                                 +',"junior_coachable_flg_val":'+junior_coachable_flg_val
                                 +',"consis_coachable_flg_val":'+consis_coachable_flg_val
                                 +',"high_coachable_flg_val":'+high_coachable_flg_val
                                 +',"ob_coachable_flg_val":'+ob_coachable_flg_val
                                 +',"elem_arithmetic_flg_val":'+elem_arithmetic_flg_val
                                 +',"elem_japanese_flg_val":'+elem_japanese_flg_val
                                 +',"elem_science_flg_val":'+elem_science_flg_val
                                 +',"elem_sociology_flg_val":'+elem_sociology_flg_val
                                 +',"elem_english_flg_val":'+elem_english_flg_val
                                 +',"elem_others_flg_val":'+elem_others_flg_val
                                 +',"junior_math_flg_val":'+junior_math_flg_val
                                 +',"junior_japanese_flg_val":'+junior_japanese_flg_val
                                 +',"junior_english_flg_val":'+junior_english_flg_val
                                 +',"junior_science_flg_val":'+junior_science_flg_val
                                 +',"junior_sociology_flg_val":'+junior_sociology_flg_val
                                 +',"junior_others_flg_val":'+junior_others_flg_val
                                 +',"high_math_flg_val":'+high_math_flg_val
                                 +',"high_japanese_flg_val":'+high_japanese_flg_val
                                 +',"high_english_flg_val":'+high_english_flg_val
                                 +',"high_physics_flg_val":'+high_physics_flg_val
                                 +',"high_chemistry_flg_val":'+high_chemistry_flg_val
                                 +',"high_biology_flg_val":'+high_biology_flg_val
                                 +',"high_geology_flg_val":'+high_geology_flg_val
                                 +',"japanese_history_flg_val":'+japanese_history_flg_val
                                 +',"world_history_flg_val":'+world_history_flg_val
                                 +',"high_geography_flg_val":'+high_geography_flg_val
                                 +',"current_sociery_flg_val":'+current_sociery_flg_val
                                 +',"high_sociery_flg_val":'+high_sociery_flg_val
                                 +',"essay_flg_val":'+essay_flg_val
                                 +',"high_others_flg_val":'+high_others_flg_val
                                 +',"hometown_val":'+hometown_val
                                 +',"pk_code_type_no_val":'+'"'+pk_code_type_no_val+'"'
                                 +',"max_score_val":'+'"'+max_score_val+'"'
                                 +'}');
       $.ajax({
                 url: 'https://',
                 type: 'POST',
                 data: ajax_data,
                  dataType: 'json'
                       }).done(function(res){
                        execSearch(res,first,per_page,page_no,page_range,$searchForm,$listSec,$pageNavi)
                       }).fail(function(xhr, status, error){
                          alert(status);
                          console.log("XMLHttpRequest : " + xhr.status);
                          console.log("textStatus     : " + status);
                          console.log("errorThrown    : " + error);

                       });

}
//対象学年のラジオボタンからフラグを取得
function grade_flg(id){
  if(document.getElementById(id).checked == true){
    return "1"
  }else{
    return "0"
  }
}
//checkboxからvalueを取り出す関数
function inq_checked(name){
   var totalCheck = '"';
   var elements = document.getElementsByName(name) ;
   for(var i = 0 ; i < elements.length ; i ++){
   if(elements[i].checked == true){
     if(totalCheck !== '"'){
       totalCheck += ',' + "'" + elements[i].value + "'"
     }else{
       totalCheck = "'" + elements[i].value + "'"
     }
   }
   }
   if(totalCheck === '"'){
     totalCheck = '';
   }
   return totalCheck
}
//checkboxから数値のvalueを取り出す関数
function inq_num_checked(name){
   var totalCheck = '"';
   var elements = document.getElementsByName(name) ;
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
function execSearch(data,first,per_page,page_no,page_range,$searchForm,$listSec,$pageNavi){
  var sumNum = 0;
  var limitNum = 0;
  var html = '';
  $listSec.html(html);
  $pageNavi.empty();
  var minNum = (page_no -1) * per_page;
  var maxNum = page_no * per_page;
  for (var idx = 0; idx < data.length; ++idx) {
    if (limitNum >= minNum && limitNum < maxNum) {
      html += '<div class="box">';
      // html += '<h3 class="hdLecturer">' + data[idx]['tutor_name_kana'] + "先生</h3>";
      html += '<div class="hdLecturer"><div class="cntL" style="margin-bottom:0px;">' + data[idx]['tutor_name_sei_kana'] + "先生</div></div>";
      html += '<div class="cntL">';
      html += '<p class="image"><img src="' + data[idx]['tutor_img'] + '" alt="' + data[idx]['tutor_name'] + '" style="width:170px; height:170px; border-radius:85px;"></p>';
      html += '<button  type="button" class="btn btn-default profileBtn"  id="searchBtn" href="' + data[idx]['tutor_movie_url'] + '" data-lity="data-lity">プロフィール動画</button>';
      html += "</div>";
      html += '<div class="cntR">';
      html += '<table class="tableSimple" stylesheet="border: solid 1px #fff;">';
      html += "<tbody><tr>";
      html += "<th>学科</th>";
      html += "<td>" + data[idx]['major'] + "</td>";
      html += "</tr>";
      html += "<tr>";
      html += "<th>対象学年</th>";
      html += "<td>" + data[idx]['grade'].replace(/,/g, ' ')  + "</td>";
      html += "</tr>";
      html += "<tr>";
      html += "<th>指導科目</th>";
      html += "<td>";
      if (data[idx]['elem_subject']) {
        html += "小学生： " + data[idx]['elem_subject'].replace(/,/g, '、 ') + "<br>";
      }
      if (data[idx]['junior_subject']) {
        html += "中学生： " + data[idx]['junior_subject'].replace(/,/g, '、 ') + "<br>";
      }
      if (data[idx]['high_subject']) {
        html += "高校生： " + data[idx]['high_subject'].replace(/,/g, '、 ') + "<br>";
      }
      html += "</td>";
      html += "</tr>";
      html += "<tr>";
      html += "<th>出身</th>";
      html += "<td>" + data[idx]['hometown'] + '出身　' + data[idx]['alma_mater'] + "卒</td>";
      html += "</tr>";
      html += "<tr>";
      html += "<th>性別</th>";
      html += "<td>" + data[idx]['sex'] + "</td>";
      html += "</tr>";
      if(data[idx]['max_score']){
        html += "<tr>";
        html += "<th>指導実績</th><td>";
        if(data[idx]['rank']==="S"){
          html += "Sランク　";
        }
        html += "偏差値" + data[idx]['max_score'] + "UP";
        html += "</td></tr>";
      }
      html += "</tbody></table>";
      html += "</div>";
      html += '<span class="clear"></span>';
      html += "</div>\n";
    }
    limitNum++;
    sumNum++

  }

  var page_li = "";
  if (page_no != 1) {
    page_li += '<li class="first"><a id="js-first" href="#">&laquo;</a></li>';
    page_li += '<li class="previous"><a id="js-prev" href="#">&lt;</a></li>';
  }
  var page_count = Math.ceil(sumNum / per_page);
  var cur_page = 1;
  var class01 = "before";
  var class02 = " head";
  var delta = 0;
  var start = (page_no < page_range) ? 1 : page_no - Math.floor(page_range / 2);
  var end = start + page_range;
  end = (end < page_count) ? end : page_count;
  for (cur_page = start; cur_page <= end; ++cur_page) {
    if (cur_page == page_no) {
      page_li += '<li class="current"><span class="current_page">' + cur_page + "</span></li>";
      class01 = "after";
    } else {
      delta = Math.abs(page_no - cur_page);
      if (end === cur_page) {
        class02 = " tail";
      }
      page_li += '<li class="' + class01 + class02 + " delta-" + delta + '"><a href="#">' + cur_page + "</a></li>";
    }
    class02 = "";
  }
  if (page_no != page_count && limitNum !== 0) {
    page_li += '<li class="next"><a id="js-next" href="#">&gt;</a></li>';
    page_li += '<li class="last"><a id="js-last" href="#">&raquo;</a></li>';
  }
  $pageNavi.append(page_li);
  // ページナビにイベント設定
  $pageNavi.find("li a").click(function () {
    var id = $(this).attr("id");
    if (id === "js-first") {
      page_no = 1;
    } else if (id === "js-prev") {
      page_no = page_no * 1 - 1;
    } else if (id === "js-next") {
      page_no = page_no * 1 + 1;
    } else if (id === "js-last") {
      page_no = page_count;
    } else {
      page_no = $(this).html();
    }
    tutorListGet(first, per_page, page_no, page_range);
    return false;
  });

    // 検索結果まで移動
    var position = $listSec.offset().top - $(".page-header").offset().top;
    $("body,html").animate({scrollTop:position});

  first = false;
  if (limitNum === 0) {
    $listSec.html("<p>該当する教師が見つかりませんでした。</p>");
  } else {

    $listSec.html(html);
  }
}

var gradeNowchecked = $('input[name=grade]:checked').val();
$('input[name=grade]').on("click touchstart",function(){
    if($(this).val() == gradeNowchecked) {
        $(this).prop('checked', false);
                $(this).next('label').removeClass('hv');
        gradeNowchecked = false;
    } else {
        gradeNowchecked = $(this).val();
    }
});

var gradeNowchecked = $('input[name=deviation]:checked').val();
$('input[name=deviation]').on("click touchstart",function(){
    if($(this).val() == gradeNowchecked) {
        $(this).prop('checked', false);
                $(this).next('label').removeClass('hv');
        gradeNowchecked = false;
    } else {
        gradeNowchecked = $(this).val();
    }
});


var gradeNowchecked = $('input[name=bunri]:checked').val();
$('input[name=bunri]').on("click touchstart",function(){
    if($(this).val() == gradeNowchecked) {
        $(this).prop('checked', false);
                $(this).next('label').removeClass('hv');
        gradeNowchecked = false;
    } else {
        gradeNowchecked = $(this).val();
    }
});

var gradeNowchecked = $('input[name=subject]:checked').val();
$('input[name=subject]').on("click touchstart",function(){
    if($(this).val() == gradeNowchecked) {
        $(this).prop('checked', false);
                $(this).next('label').removeClass('hv');
        gradeNowchecked = false;
    } else {
        gradeNowchecked = $(this).val();
    }
});

var gradeNowchecked = $('input[name=gender]:checked').val();
$('input[name=gender]').on("click touchstart",function(){
    if($(this).val() == gradeNowchecked) {
        $(this).prop('checked', false);
                $(this).next('label').removeClass('hv');
        gradeNowchecked = false;
    } else {
        gradeNowchecked = $(this).val();
    }
});


$('.checkboxTab label').hover(function(){
    $(this).addClass('hv');
},function(){
    $(this).removeClass('hv');
});
