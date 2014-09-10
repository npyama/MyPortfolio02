/****************************************
 Contents Toggle
****************************************/
$(function(){
 	$('#btnAboutMe').click(function() {
  		$('#contentsAboutMe').slideToggle(600, 'easeInQuint' , function() {
  		});
	});
});

$(function(){
 	$('#btnSkill').click(function() {
  		$('#contentsSkill').slideToggle(600, 'easeInQuint' , function() {
  		});
	});
});

$(function(){
 	$('#btnProduct').click(function() {
  		$('#contentsProduct').slideToggle(600, 'easeInQuint' , function() {
  		});
	});
});
/******** END Contents Toggle ********/





$(function(){

/****************************************
	hidden URL bar
****************************************/
setTimeout(function(){  window.scrollTo(0,1);},1000); 
$(function(){
	window.scrollTo(0,1);
});



/****************************************
	タップ判定
****************************************/
$('.contentsBtn').click(function() {
	$(this).animate({ 
	opacity: '0.7'
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: '1'
	}, { duration:200, easing: 'linear', });

});



/****************************************
  least.js
****************************************/
$(document).ready(function(){
    $('.least-gallery').least();
});



});





