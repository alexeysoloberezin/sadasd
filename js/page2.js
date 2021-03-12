$('.header__call').click(function(){
  $('.window').addClass('window-active');
 });
 $('.popup__close').click(function(){
 $('.window').removeClass('window-active');
 });
$('.postfoter__next').click(function(){
  $('.postfoter__show').addClass('active');
  $('.postfoter__next').addClass('active');
});
$('.postfoter__btn').click(function(){
  $('.postfoter__show').removeClass('active');
  $('.postfoter__next').removeClass('active');
});
var myVideo = document.querySelector(".recalll__video-js");
$('.video-poster__2 ').click(function(){      
    $('.video-poster__2 ').removeClass('active');
    myVideo.play();
  });

var myVideo1 = document.querySelector(".main__video");
$('.main__video-poster').click(function(){      
    $('.main__video-poster').removeClass('active');
    myVideo1.play();
  });
$('.start-curse__close').click(function(){        
    $('.start-curse').removeClass('active');
  });
$('.nearcurse__phone').mask("+7 (999) 99-99-999");
$('.recalll__slider').slick({
slidesToShow: 2,
slidesToScroll: 2,  
dots: true, 
infinite: true   ,
responsive: [
  {
    breakpoint: 850,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,          
    }
  }
]
});
$('.variants-btn').click(function(){        
  $('.variants__block-1').removeClass('active');
  $('.variants__block-2').addClass('active');
});
$('#installmentplan').on('click', function () {
  $('.payment__btn').removeClass('active');
  if ( $(this).is(':checked') ) {    
    $('.payment__btn-2').addClass('active');
            // checkbox checked 
  } else {
    $('.payment__btn-1').addClass('active');
      // checkbox unchecked 
  }
})

$('.popular__slider').slick({
slidesToShow: 3,
slidesToScroll: 1,  
dots: true, 
infinite: true ,
responsive: [
  {
    breakpoint: 1060,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2                
    }
  },
  {
    breakpoint: 711,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1                
    }
  }
]   
});
$('.burger').click(function(){
$('.window2').toggleClass('window2-active')
$('.header__nav').toggleClass('header__nav-active')    
$('.burger').toggleClass('active-burger')  
$('body').toggleClass('body-fixed');
});
$('.footer__list-title').click(function(){
this.parentElement.classList.toggle('footer__list-view')
});