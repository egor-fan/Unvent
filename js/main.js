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


