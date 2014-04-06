$('.new_tweet_input').focusin(function(){
  $('.quick_tweet_box, .new_tweet_input').animate({height: '+=100px'},'fast');
  $('.second_block').css('margin-top','110px')
});

$('.new_tweet_input').focusout(function(){
  $('.second_block').css('margin-top','0px')
  $('.quick_tweet_box, .new_tweet_input').animate({height: '-=100px'},'fast');
});