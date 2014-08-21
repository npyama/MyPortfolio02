
//Contents toggle
/*
$(function(){
    $("#btnAboutMe").hover(
    //マウスオーバー時の処理
    function(){
        $("#contentsAboutMe").css("display","block")
        $("#contentsAboutMe").css("height","840px")
    },
    //マウスアウト時の処理
    function(){
        $("#contentsAboutMe").css("display","none")
        $("#contentsAboutMe").css("height","0px")
    });
});
*/




$(function(){

 	$('#btnAboutMe').click(function() {
  		$('#contentsAboutMe').slideToggle('slow', function() {
    	// アニメーション完了後に実行したい処理
  		});
	});


});

















$(function(){


/****************************************
	hidden URL bar
****************************************/
/*

setTimeout(function(){  window.scrollTo(0,1);},1000); 
$(function(){
	window.scrollTo(0,1);
});


*/



/****************************************
	タップ判定
****************************************/
/*
$('img').click(function() {
	$(this).animate({ 
	opacity: '0.3'
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: '1'
	}, { duration:200, easing: 'linear', });

});
*/

/****************************************
	contentsToggle
****************************************/



});


