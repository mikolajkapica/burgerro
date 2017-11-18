$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".hamburger").toggleClass("hamburger-open");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".hamburger-menu").toggleClass("open");
  });
});
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".body-content").toggleClass("open3");
  });
});
$(document).ready(function() {
    $('body').hide().fadeIn(500);
});

var $about = $('.about');

$about.waypoint(function (direction) {
  if (direction == 'down') {
    $about.addClass('plus');
  }
  else {
    $about.removeClass('plus');
  }
}, { offset: '50%' });

var $news = $('.newsletter');

$news.waypoint(function (direction) {
  if (direction == 'down') {
    $news.addClass('plus');
  }
  else {
    $news.removeClass('plus');
  }
}, { offset: '80%' });

var $footer = $('.footer');

$footer.waypoint(function (direction) {
  if (direction == 'down') {
    $footer.addClass('plus');
  }
  else {
    $footer.removeClass('plus');
  }
}, { offset: '80%' });
