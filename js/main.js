$('.multiple-items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });

    $(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock')
    
  })
})

$(document).ready(function(){
  $('.header__list').click(function(event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  })
})

$('.variable-width').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.one-time').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
adaptiveHeight: true
});

