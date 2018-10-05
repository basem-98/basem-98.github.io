$(function(){
  $(window).scroll(function(){
    NavbarScroll();
    
  })

  function NavbarScroll(){
    if($(window).scrollTop() > 5){
      $('.navbar').css('width','100%')
      $('.navbar').css('border-radius','0')
      $('.navbar').css('top','0')
      $('.navbar').css('margin-left','0')
      $('.navbar').css('position','fixed')
      $('#trigger').css('z-index','9999')
      
    }
    else{
      $('.navbar').css('width','90%')
      $('.navbar').css('border-radius','15px')
      $('.navbar').css('top','50px')
      $('.navbar').css('position','absolute')
      $('.navbar').css('margin-left','5%')
      $('#trigger').css('z-index','9999')
    }
  }

  $('#trigger').click(function(){
    $('#trigger').toggleClass('enabled');
    $('#side-nav').toggleClass('Opened');
    $('#navbar').toggleClass('SNA');
    $('body').toggleClass('On');
    $('main, header').toggleClass('OnOn')

  })
})