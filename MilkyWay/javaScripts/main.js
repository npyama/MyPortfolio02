$(function(){
	$("#menu li").hover(
		function() {
			$(this).find("img").stop().animate({'opacity' : '0'}, 150);
		},
		function() {
			$(this).find("img").stop().animate({'opacity' : '1'}, 300);
		});
})

$(function(){
	$(".recent_seminar_box").hover(
		function() {
			$(this).stop().animate({'opacity' : '1'}, 300);
			$(this).css("border", "1px solid rgba(225, 102, 48, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 3px #232323");
			$(this).css("-webkit-box-shadow", "0px 0px 3px #232323");
		},
		function() {
			$(this).stop().animate({'opacity' : '0.85'}, 500);
			$(this).css("border", "1px solid rgba(172, 172, 172, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 0px #fff");
			$(this).css("-webkit-box-shadow", "0px 0px 0px #fff");
		});
})

$(function(){
	$(".post_slide").hover(
		function() {
			$(this).stop().animate({'opacity' : '1'}, 300);
			$(this).css("border", "1px solid rgba(225, 102, 48, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 3px #232323");
			$(this).css("-webkit-box-shadow", "0px 0px 3px #232323");
		},
		function() {
			$(this).stop().animate({'opacity' : '0.85'}, 500);
			$(this).css("border", "1px solid rgba(172, 172, 172, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 0px #fff");
			$(this).css("-webkit-box-shadow", "0px 0px 0px #fff");
		});
})

$(function(){
	$(".post_seminar").hover(
		function() {
			$(this).stop().animate({'opacity' : '1'}, 300);
			$(this).css("border", "1px solid rgba(225, 102, 48, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 3px #232323");
			$(this).css("-webkit-box-shadow", "0px 0px 3px #232323");
		},
		function() {
			$(this).stop().animate({'opacity' : '0.85'}, 500);
			$(this).css("border", "1px solid rgba(172, 172, 172, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 0px #fff");
			$(this).css("-webkit-box-shadow", "0px 0px 0px #fff");
		});
})

$(function(){
	$(".seminarlist_box").hover(
		function() {
			$(this).stop().animate({'opacity' : '1'}, 300);
			$(this).css("border", "1px solid rgba(225, 102, 48, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 3px #232323");
			$(this).css("-webkit-box-shadow", "0px 0px 3px #232323");
		},
		function() {
			$(this).stop().animate({'opacity' : '0.85'}, 500);
			$(this).css("border", "1px solid rgba(172, 172, 172, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 0px #fff");
			$(this).css("-webkit-box-shadow", "0px 0px 0px #fff");
		});
})

$(function(){
	$(".other_slide").hover(
		function() {
			$(this).stop().animate({'opacity' : '1'}, 300);
			$(this).css("border", "1px solid rgba(225, 102, 48, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 3px #232323");
			$(this).css("-webkit-box-shadow", "0px 0px 3px #232323");
		},
		function() {
			$(this).stop().animate({'opacity' : '0.85'}, 500);
			$(this).css("border", "1px solid rgba(172, 172, 172, 1)");
			$(this).css("-moz-box-shadow", "0px 0px 0px #fff");
			$(this).css("-webkit-box-shadow", "0px 0px 0px #fff");
		});
})
