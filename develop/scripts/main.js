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
$('img').click(function() {
	$(this).animate({ 
	opacity: '0.3'
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: '1'
	}, { duration:200, easing: 'linear', });

});


/****************************************
	contentsToggle
****************************************/

/*
$('#btnAboutMe').click(function() {
	$('#contentsAboutMe').animate({ 
	opacity: '1'
	}, { duration:200, easing: 'linear', });
	$('#contentsAboutMe').animate({ 
	height: '1000px'
	}, { duration:200, easing: 'linear', });

});

*/

/*
$("#btnAboutMe").toggle(
  function () {
    $(this).css({'opacity':'1'});
  },
  function () {
    $(this).css({'opacity':'0'});
  });
*/


});






