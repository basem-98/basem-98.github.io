$(window).on('load', function() {
  $('.load').css('opacity', '0');
  $('.load').css('transition-delay', '4s');
  
  var tran = 'translate(0,-50%)'
  $('.trident').css('top', '25%');
  $('.trident2').css('top', '25%');
  $('.log1').css('top', '25%');
  $('.log2').css('top', '25%');
  $('.text-container').css('opacity', '1')
  $('.text-container').css('transform', tran)
  
var zerotran = 'translate(0,0)'
  
  setTimeout(function(){
    $('.load').css('display', 'none')
  }, 5000)

  setTimeout(function(){
    $('.link1').css('opacity', '1')
    $('.link1').css('transform', zerotran)
  }, 5500)
  setTimeout(function(){
    $('.link2').css('opacity', '1')
    $('.link2').css('transform', zerotran)
  }, 6500)
  setTimeout(function(){
    $('.link3').css('opacity', '1')
    $('.link3').css('transform', zerotran)
  }, 6000)
  
});

$(function(){

  $('.navigation, .pager a').click(function(e){
    e.preventDefault()
  })

  var centerTranOut = 'translate(200%,0%)'
  var centerTranIn = 'translate(0%,0%)'
  var leftTranIn = 'translate(0%,0%)'
  var leftTranOut = 'translate(-200%, 0)'

  $('#about').click(function(){
    $('.container-center').css('transform', centerTranOut)
    $('.container-left').css('transform', leftTranIn)
    $('.fixed-container').css('overflow-y', 'scroll')
    $('.container-right').addClass('hide-on-med-and-down')
    
    setTimeout(function(){$('#hi').css('opacity', '1')}, 1000)
    setTimeout(function(){$('#name').css('opacity', '1')}, 3000)
    setTimeout(function(){$('#about-text').css('opacity', '1')}, 6000)

    setTimeout(function(){$('.lang1').css('opacity', '1')}, 7250)
    setTimeout(function(){$('.lang2').css('opacity', '1')}, 7500)
    setTimeout(function(){$('.lang3').css('opacity', '1')}, 7750)
    setTimeout(function(){$('.lang4').css('opacity', '1')}, 8000)
    setTimeout(function(){$('.lang5').css('opacity', '1')}, 8250)
    setTimeout(function(){$('.lang6').css('opacity', '1')}, 8500)

  })
  
  

  $('#back-right').click(function(){
    $('.container-center').css('transform', centerTranIn)
    $('.container-left').css('transform', leftTranOut)
    $('.fixed-container').css('overflow-y', 'hidden')
    $('.container-right').removeClass('hide-on-med-and-down')

    $('#hi').css('opacity', '0')
    $('#name').css('opacity', '0')
    $('#about-text').css('opacity', '0')
    $('.lang1, .lang2, .lang3, .lang4, .lang5, .lang6').css('opacity', '0')

  })

  $('#projects').click(function(){
    $('.container-center').css('transform', leftTranOut)
    $('.container-right').css('transform', centerTranIn)
    $('.fixed-container').css('overflow-y', 'scroll')

    setTimeout(function(){$('.project1').css('opacity', '1')}, 1000)
    setTimeout(function(){$('.project2').css('opacity', '1')}, 1500)
    setTimeout(function(){$('.project3').css('opacity', '1')}, 2000)
    setTimeout(function(){$('.project4').css('opacity', '1')}, 2500)

  })

  $('#back-left').click(function(){
    $('.container-center').css('transform', centerTranIn)
    $('.container-right').css('transform', centerTranOut)
    $('.fixed-container').css('overflow-y', 'hidden')
    $('.project1, .project2, .project3, .project4').css('opacity', '0')
  })

  $('#one').click(function(){
    $('.tab1').css('opacity', '1')
    $('.tab2').css('opacity', '0')
    $('.tab2').css('z-index', '4')
    $('.tab1').css('z-index', '5')
    $('#two').removeClass('neon')
    $('#one').addClass('neon')
    setTimeout(function(){$('.project1').css('opacity', '1')}, 1000)
    setTimeout(function(){$('.project2').css('opacity', '1')}, 1500)
    setTimeout(function(){$('.project3').css('opacity', '1')}, 2000)
    $('.tab1').css('transition-delay', '1s')
    $('.tab2').css('transition-delay', '0s')
  })

  $('#two').click(function(){
    $('.tab1, .project1, .project2, .project3').css('opacity', '0')
    $('.tab2').css('opacity', '1')
    $('.tab2').css('z-index', '5')
    $('.tab1').css('z-index', '4')
    $('#one').removeClass('neon')
    $('#two').addClass('neon')
    $('.tab1').css('transition-delay', '0s')
    $('.tab2').css('transition-delay', '1s')
  })


})