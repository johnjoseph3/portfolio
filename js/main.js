// Smooth Scroll

$('.inactive').on('click', function(){
    $("li > a").removeClass('active');
    $(this).addClass('active');
  });

$(document).ready(function(){

  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

  // Hover effects for projects

  $('.projects-item').hover(function() {
    var hoverDiv = $(this).find('.item-overlay');
    hoverDiv.fadeIn('fast');
  });

  $('.projects-item').mouseleave(function() {
    var hoverDiv = $(this).find('.item-overlay');
    hoverDiv.fadeOut('fast');
  });


  if ($(window).width() < 450) {
    $('.hero-container').html('<header class="hero-descrip">John Joseph <br> Web Developer</header><div class="overlay"></div><img class="hero-img" src="images/clouds.jpg">');          
    $('.hero-descrip').css('line-height', '1.5em');
  }

  if ($(window).width() > 450) {
    $('.hero-container').html('<header class="hero-descrip">John Joseph | Web Developer</header><div class="overlay"></div><img class="hero-img" src="images/clouds.jpg">');          
    $('.hero-descrip').css('line-height', '1em');
  }

  $(window).resize(function() {

    if ($(window).width() < 450) {
      $('.hero-container').html('<header class="hero-descrip">John Joseph <br> Web Developer</header><div class="overlay"></div><img class="hero-img" src="images/clouds.jpg">');          
      $('.hero-descrip').css('line-height', '1.5em');
    }

    if ($(window).width() > 450) {
      $('.hero-container').html('<header class="hero-descrip">John Joseph | Web Developer</header><div class="overlay"></div><img class="hero-img" src="images/clouds.jpg">');          
      $('.hero-descrip').css('line-height', '1em');
    }

  }); 

});