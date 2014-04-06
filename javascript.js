$('.new_tweet_input').focusin(function(){
  $('.quick_tweet_box').animate({height: '+=100px'},'fast');
  $('.new_tweet_input').animate({height: '+=50px'},'fast');
  $('.hidden_buttons').show();
  $('.second_block').css('margin-top','110px')
});

$('.new_tweet_input').focusout(function(){
  $('.second_block').css('margin-top','0px')
  $('.quick_tweet_box').animate({height: '-=100px'},'fast');
  $('.new_tweet_input').animate({height: '-=50px'},'fast');
   $('.hidden_buttons').hide();
});