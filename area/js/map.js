$(function(){
	var areaLinks = {
        "北海道" : "./hokkaido.html",
        "青森県" : "./aomori.html",
        "岩手県" : "./iwate.html",
        "宮城県" : "./miyagi.html",
        "秋田県" : "./akita.html",
        "山形県" : "./yamagata.html",
        "福島県" : "./fukushima.html",
        "茨城県" : "./ibaraki.html",
        "栃木県" : "./tochigi.html",
        "群馬県" : "./gunma.html",
        "埼玉県" : "./saitama.html",
        "千葉県" : "./chiba.html",
        "東京都" : "./tokyo.html",
        "神奈川県" : "./kanagawa.html",
        "新潟県" : "./nigata.html",
        "富山県" : "./toyama.html",
        "石川県" : "./ishikawa.html",
        "福井県" : "./fukui.html",
        "山梨県" : "./yamanashi.html",
        "長野県" : "./nagano.html",
        "岐阜県" : "./gifu.html",
        "静岡県" : "./shizuoka.html",
        "愛知県" : "./aichi.html",
        "三重県" : "./mie.html",
        "滋賀県" : "./shiga.html",
        "京都府" : "./kyoto.html",
        "大阪府" : "./osaka.html",
        "兵庫県" : "./hyogo.html",
        "奈良県" : "./nara.html",
        "和歌山県" : "./wakayama.html",
        "鳥取県" : "./tottori.html",
        "島根県" : "./shimane.html",
        "岡山県" : "./okayama.html",
        "広島県" : "./hiroshima.html",
        "山口県" : "./yamaguchi.html",
        "徳島県" : "./tokushima.html",
        "香川県" : "./kagawa.html",
        "愛媛県" : "./ehime.html",
        "高知県" : "./kochi.html",
        "福岡県" : "./fukuoka.html",
        "佐賀県" : "./saga.html",
        "長崎県" : "./nagasaki.html",
        "熊本県" : "./kumamoto.html",
        "大分県" : "./oita.html",
        "宮崎県" : "./miyazaki.html",
        "鹿児島県" : "./kagoshima.html",
        "沖縄県" : "./okinawa.html",
	};

	var areas = [
        {"code": 1 ,name:"北海道",color:"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1]},
        {"code": 2 ,name:"青森県",color:"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2]},
        {"code": 3,name:"岩手県",color:"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[3]},
        {"code": 4,name:"宮城県",color:"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[4]},
        {"code": 5,name:"秋田県",color:"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[5]},
        {"code": 6,name:"山形県",color:"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[6]},
        {"code": 7,name:"福島県",color:"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[7]},
        {"code": 8,name:"茨城県",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8]},
        {"code": 9,name:"栃木県",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[9]},
        {"code": 10,name:"群馬県",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[10]},
        {"code": 11,name:"埼玉県",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[11]},
        {"code": 12,name:"千葉県",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[12]},
        {"code": 13,name:"東京都",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[13]},
        {"code": 14,name:"神奈川県",color:"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[14]},
        {"code": 15,name:"新潟県",color:"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15]},
        {"code": 16,name:"富山県",color:"#52d49c", "hoverColor":"#93ecc5", "prefectures":[16]},
        {"code": 17,name:"石川県",color:"#52d49c", "hoverColor":"#93ecc5", "prefectures":[17]},
        {"code": 18,name:"福井県",color:"#52d49c", "hoverColor":"#93ecc5", "prefectures":[18]},
        {"code": 19,name:"山梨県",color:"#52d49c", "hoverColor":"#93ecc5", "prefectures":[19]},
        {"code": 20,name:"長野県",color:"#52d49c", "hoverColor":"#93ecc5", "prefectures":[20]},
        {"code": 21,name:"岐阜県",color:"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21]},
        {"code": 22,name:"静岡県",color:"#77e18e", "hoverColor":"#aff9bf", "prefectures":[22]},
        {"code": 23,name:"愛知県",color:"#77e18e", "hoverColor":"#aff9bf", "prefectures":[23]},
        {"code": 24,name:"三重県",color:"#77e18e", "hoverColor":"#aff9bf", "prefectures":[24]},
        {"code": 25,name:"滋賀県",color:"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25]},
        {"code": 26,name:"京都府",color:"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[26]},
        {"code": 27,name:"大阪府",color:"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[27]},
        {"code": 28,name:"兵庫県",color:"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[28]},
        {"code": 29,name:"奈良県",color:"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[29]},
        {"code": 30,name:"和歌山県",color:"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[30]},
        {"code": 31,name:"鳥取県",color:"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31]},
        {"code": 32,name:"島根県",color:"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[32]},
        {"code": 33,name:"岡山県",color:"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[33]},
        {"code": 34,name:"広島県",color:"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[34]},
        {"code": 35,name:"山口県",color:"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[35]},
        {"code": 36,name:"徳島県",color:"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36]},
        {"code": 37,name:"香川県",color:"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[37]},
        {"code": 38,name:"愛媛県",color:"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[38]},
        {"code": 39,name:"高知県",color:"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[39]},
        {"code": 40,name:"福岡県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40]},
        {"code": 41,name:"佐賀県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[41]},
        {"code": 42,name:"長崎県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[42]},
        {"code": 43,name:"熊本県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[43]},
        {"code": 44,name:"大分県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[44]},
        {"code": 45,name:"宮崎県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[45]},
        {"code": 46,name:"鹿児島県",color:"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[46]},
        {"code": 47,name:"沖縄県",color:"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47]}
	];

	$("#map").japanMap(
		{
			areas  : areas,
			selection : "area",
			borderLineWidth: 0.25,
			drawsBoxLine : false,
			movesIslands : true,
			showsAreaName : false,
			width: 700,
			backgroundColor: "#f6f6f6",
			font : "MS Mincho",
			fontSize : 12,
			fontColor : "areaColor",
			fontShadowColor : "black",
			onSelect:function(data){
				location.href = areaLinks[data.area.name];
			},
		}
	);
});



var ripple, ripples;
$(function () {
  $(".list-area__main").on("click", function () {
    $(this).toggleClass("is-active"), $(this).next().slideToggle()
  }),  $(".list-faq__q").on("click", function () {
    $(this).toggleClass("is-active"), $(this).next().slideToggle()
  });
  var e = $("#Mordal"),
    t = $("#Mordal section");
  $("#MordalNav li").each(function (e) {
    $(this).attr("id", "nav-" + (e + 1))
  }), t.each(function (e) {
    $(this).attr("id", "mordal-" + (e + 1))
  }), $(".mordal-on").on("click", function () {
    navID = $(this).attr("id"), navNumber = navID.replace(/[^0-9^\.]/g, ""), targetNumber = parseInt(navNumber, 10), e.fadeIn(), e.addClass("is-active"), $("#mordal-" + targetNumber).fadeIn()
  }), e.on("click touchend", function (i) {
    e.hasClass("is-active") && ($(i.target).closest(".mordal__content").length && !$(i.target).closest(".mordal__close").length || (e.fadeOut(), t.fadeOut(), e.removeClass("is-active")))
  });

});
