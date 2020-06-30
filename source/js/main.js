$(function(){	
  $('.span').click(function(){
   $(this).css('opacity', '0');
   $('.menu').animate({
    right: 0
 });
   $('body').animate({
    right: 200
  });
 });
 $('span.close').click(function(){
  $('.span').css('opacity', '1');
  $('.menu').animate({
   right: '-200px'
 });
  $('body').animate({
    right: 0
  });
 });
 });
