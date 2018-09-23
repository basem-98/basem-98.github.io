$(function(){
      
      
  
  
  
  
      function shuffle(images) {
        for(var j, x, i = images.length; i; j = parseInt(Math.random() * i), x = images[--i], images[i] = images[j], images[j] = x);
        return images;
        }
  
      var images = 
          ['https://i1.wp.com/jonalisblog.com/wp-content/uploads/2015/10/ririth.png?resize=300%2C300', 
           'https://cdn.dribbble.com/users/794598/screenshots/2083416/dribbble_-_drake.jpg',
           'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F2ad6989b8b8ed26cab6321d048f219f9.630x630x1.jpg', 
           'https://img.prisguiden.no/445/445680/Abbey-A.jpg', 
           'https://www.aclp.es/wp-content/uploads/2016/06/david-guetta.jpg', 
           'https://images-na.ssl-images-amazon.com/images/I/61JD1HvFDWL._SL1062_.jpg',
           'https://upload.wikimedia.org/wikipedia/pt/0/02/Katy_Perry_-_Prism.jpg', 
           'https://scroar.net/wp-content/uploads/2017/11/Taylor-Swift-reputation-ART-2017-billboard-1548-800x800.jpg', 
           'https://i.ebayimg.com/images/i/262955062020-0-1/s-l1000.jpg', 
           'https://media.gq.com/photos/5583c2683655c24c6c96be2c/master/w_800/style-blogs-the-gq-eye-michael-jackson-daily-eye-queue.jpg', 
           'https://cdn.shopify.com/s/files/1/0387/3509/products/calvin-harris-summer_remix_cd_1024x1024.jpg?v=1453860394', 
           'http://s3.amazonaws.com/hiphopdx-production/2017/04/Kendrick-Lamar-DAMN-album-cover-featured-827x620.jpg', 
           'http://hitfm.com.cy/wp-content/uploads/2013/07/lady-gaga-artpop.jpg', 
           'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/de/3f/91/de3f9135-459e-ed36-c8b2-45987d830b54/UMG_cvrart_00602537596379_01_RGB72_1500x1500_13UAEIM06265.jpg/1200x630bb.jpg', 
           'https://writers-connection.noblogs.org/files/2012/02/whitney-houston-cover.jpg',
           'http://www.hypebeast.com/image/2010/07/kanye-west-power-cover-art-1.jpg', 
           'https://prettymuchamazing.com/.image/t_share/MTMzOTA4ODEzNTUwOTg3OTA3/adele-25jpg.jpg', 'https://static1.squarespace.com/static/58ab2fce20099e7487a18b2a/t/58b5dea18c60358b07cfe2b3/1488319167022/screen-shot-2015-05-28-at-11-55-41-am.png',
           'https://www.rollingstone.it/wp-content/uploads/2017/07/86e0d33ebe09cafa4e686ad0f38dc3df.1000x1000x1.jpg', 'https://taylormademarketing.files.wordpress.com/2012/07/marilyn_manson_smells_like_children.jpg', 
           'http://st.cdjapan.co.jp/pictures/l/16/30/WPCR-14496.jpg?v=1',
           'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2015%2F01%2Fjustin-timberlake-20-20-experience_510x510.jpg%3Fw%3D510&w=700&q=85',
           'http://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2017/10/06/sam-disco-ok-1-820x500.jpg',
           'https://images.rapgenius.com/dfea8b5a466d1f794e2cfb60991d215e.600x600x1.jpg',
           'https://i.pinimg.com/originals/11/d9/87/11d987f5609b511c620378b0544b90a0.jpg',
           'https://images.eil.com/large_image/LOUIS_ARMSTRONG_UNDER%2BTHE%2BSTARS%2B-%2B180GM-508955.jpg',
           'https://is4-ssl.mzstatic.com/image/thumb/Music49/v4/16/0a/31/160a312c-8a3f-1e5e-e296-281ccc4b5ea0/source/1200x1200bb.jpg',
           'https://www.billboard.com/files/stylus/501850-nicki-minaj-cover-617-409.jpg',
           'https://cdnrockol-rockolcomsrl.netdna-ssl.com/NLMXOT3aB9-jHdEXaO_40Z2UnbE=/702x526/smart/rockol-img/img/foto/upload/the-dark-side-of-the-moon-2011-remastered-version-pink-floyd-cover-ts1501084007.jpeg',
           'http://www.trbimg.com/img-53f5d0a1/turbine/sfl-free-download-of-new-shakira-album-2014082-001/1200/1200x900',
           'https://e.snmc.io/i/300/w/c0004aca097ead93ca71ce45edc25ad8/4727812',
           'https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/12/2015Coldplay_AHeadFullOfDreams271115-1.jpg',
           'https://i.pinimg.com/originals/c8/da/d5/c8dad592f20121a01f5e472025d060e4.jpg',
           'https://pre00.deviantart.net/b469/th/pre/i/2015/265/e/c/sia___this_is_acting__cover_album__2015_by_jeanbox77-d9ahnd6.jpg', 'https://www.billboard.com/files/styles/review_main_image/public/evanescence-fallen-album-410-410-1.jpg', 'https://i.pinimg.com/736x/ea/ac/da/eaacdae936e51911fc8c6b6e8ec06a0f--panic-at-the-disco-album-covers-panic-at-the-disco-wallpaper.jpg', 'https://i2.wp.com/ventsmagazine.com/wp-content/uploads/2016/02/c9beaee2-5a27-48d4-a0ed-d668d6edfbab.jpg?resize=500%2C330', 'http://scstylecaster.files.wordpress.com/2013/10/britney-jean-album-cover.jpg?w=560&h=555', 'https://consequenceofsound.files.wordpress.com/2015/03/diplo-mo-dj-snake-lean-on.jpg?quality=80',
           'https://hamadamania.files.wordpress.com/2017/02/bebe13.jpg', 'https://static.qobuz.com/images/covers/89/80/0060255728089_600.jpg'
           
          ]
      var image2 = 
          ['../IMGS/music/1.jpg', '../IMGS/music/2.jpg' , '../IMGS/music/3.jpg' , '../IMGS/music/4.jpg' , '../IMGS/music/5.jpg' , '../IMGS/music/6.jpg' , '../IMGS/music/7.jpg' , '../IMGS/music/8.jpg' , '../IMGS/music/9.jpg' , '../IMGS/music/10.jpg', '../IMGS/music/11.jpg', '../IMGS/music/12.jpg', '../IMGS/music/13.jpg', '../IMGS/music/14.jpg', '../IMGS/music/15.jpg', '../IMGS/music/16.jpg', '../IMGS/music/17.jpg', '../IMGS/music/18.jpg', '../IMGS/music/19.jpg', '../IMGS/music/20.jpg', '../IMGS/music/21.jpg', '../IMGS/music/22.jpg', '../IMGS/music/23.jpg', '../IMGS/music/24.jpg', '../IMGS/music/25.jpg', '../IMGS/music/26.jpg', '../IMGS/music/27.jpg', '../IMGS/music/28.jpg', '../IMGS/music/29.jpg', '../IMGS/music/30.jpg', '../IMGS/music/31.jpg', '../IMGS/music/32.png', '../IMGS/music/33.jpg', '../IMGS/music/35.jpg', '../IMGS/music/35.png', '../IMGS/music/36.jpg',
          '../IMGS/music/37.jpg'];
      
      
      images = shuffle(images)
      
      $('.cover-art').each(function(i){
        
        $(this).css({'background-image': 'url(' + images[i] + ')'});  
    });
  
  
      
      var scrollLink = $('.scroll')
      
      scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
          scrollTop: window.innerHeight * 1.5
        }, 1000 )
      })
      
/*SIDENAV FUNCTION*/      
      
      $('#trigger').click(function(){
        $('#trigger').toggleClass('active')
        $('#sidebar').toggleClass('on')
        $('main').toggleClass('main-on')
        $('#overlay').toggleClass('over-on')
        $('body').toggleClass('body-on')
      })

  
      $('#theme-switch').click(function(){
        $('#theme-switch').toggleClass('light')
        $('#overlay-img').toggleClass('light-bg')
        $('body').toggleClass('light-version')
        
      })
/* SCROLL Effect FUNCTIONSSSSSSS */  
  
  
       
      
      var imgFilterOff= 'blur(0) contrast(1) grayscale(0.3) brightness(1)'
      var imgFilterOn = 'blur(0px) contrast(1) grayscale(0.3) brightness(1)'
      var textFilterOn= 'blur(0)'
      var textFilterOff= 'blur(0px)'
      var overImgFilter= 'blur(0px) contrast(0.1) grayscale(0.5) brightness(0)'
      
      
      //var wall3 = "url(../IMGS/christian-chen-735653-unsplash.jpg)"

      
      $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 0.20){
          
          $('.hero-text1').css('top', '-50%')
          $('.hero-text2').css('top', '50%')
          $('.hero-text1').css('filter', textFilterOn)
          $('.hero-text2').css('filter', textFilterOff)
          $('.hero-text1').css('opacity', '0')
          $('.hero-text2').css('opacity', '1')
          
          
        }
        else{
          $('.hero-text1').css('top', '50%')
          $('.hero-text2').css('top', '120%')
          
          $('.hero-text1').css('filter', textFilterOff)
          $('.hero-text2').css('filter', textFilterOn)
          $('.hero-text1').css('opacity', '1')
          $('.hero-text2').css('opacity', '0')
        }
      })
      
      
  
      $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 0.40){
          $('.overlay-img').css('filter', imgFilterOn)
          $('.hero-text2').css('top', '-50%')
          $('.hero-text3').css('filter', textFilterOff)
          $('.hero-text3').css('top', '50%')
          $('.hero-text3').css('opacity', '1')
          $('.hero-text2').css('filter', textFilterOn)
          $('.hero-text2').css('opacity', '0')
          $('#theme-switch').css('opacity', '0')
          $('#theme-switch').css('fiter', textFilterOff)
          $('nav').css('background', 'rgba(51,51,51,1)')
        }
        else{
          $('.overlay-img').css('filter', imgFilterOff)
          $('.hero-text3').css('filter', textFilterOn)
          $('.hero-text3').css('top', '120%')
          $('.hero-text3').css('opacity', '0')
          $('#theme-switch').css('opacity', '1')
          $('#theme-switch').css('fiter', textFilterOn)
          $('nav').css('background', 'rgba(51,51,51,0)')
        }
      })
      
      $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 0.5){
          $('.godown').css('opacity', '0')
          $('.godown').css('display', 'none')
          
        }
        else{
          $('.godown').css('opacity', '1')
          $('.godown').css('display', 'block')
          
        }
      })
      
      $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 0.2){
          $('.hero-text3').css('position', 'absolute')
          $('.hero-text3').css('transition', '0.5s')
          
        }
        else{
          $('.hero-text3').css('position', 'fixed')
          $('.hero-text3').css('transition', '0.5s')
          
        }
      })
      
      $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 1.2){
          
          
          $('.overlay-img').css('filter', overImgFilter)
          $('.textar').css('opacity', '0')
        }
        else{
          $('.textar').css('opacity', '0.1')
        }
      })
  
  
  
      
  
      
/*PHONE AND IMAGES SCROLL FUNCTIONS*/
  $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 0.7){
          $('.phone').css('top', '0')
          $('.phone').css('opacity', '1')
          $('#inside1').css('opacity', '1')
          $('.phone').css('transition', anima)
          
        }
        else{
          $('.phone').css('top', '100vh')
          $('.phone').css('opacity', '0')
          $('#inside1').css('opacity', '0')
          $('.phone').css('transition', anima)
        }
      })
  var tran2= 'translate(-50%, 0)'
  var tran = 'translate(-50%,-50%)'
  var anima= ' opacity 0.5s'
  
  

  
  
  $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 1.46){
          
          if($(window).innerWidth() > 992){
            $('.phone').css('position', 'fixed')
            $('.phone').css('top', '50%')
            $('.phone').css('left', '25%')
            $('.phone').css('transform', tran)
            $('.phone').css('transition', anima)
            $('.sec1').css('opacity', '1')
            $('.sec1').css('top', '50vh')
            $('.sec1').css('filter', textFilterOff)
          }
          
          else{
            $('.phone').css('position', 'fixed')
            $('.phone').css('top', '50%')
            $('.phone').css('left', '50%')
            $('.phone').css('transform', tran)
            $('.phone').css('transition', 'opacity 0s')
            $('.sec1').css('opacity', '1')
            $('.sec1').css('top', '50vh')
            $('.sec1').css('filter', textFilterOff)
          }
        }
          
        else{
          $('.phone').css('position', 'absolute')
          $('.phone').css('top', '0%')
          $('.phone').css('left', '50%')
          $('.phone').css('transform', tran2)
          $('.phone').css('transition', 'opacity 1s')
          $('.sec1').css('opacity', '0')
          $('.sec1').css('top', '100vh')
          $('.sec1').css('filter', textFilterOn)
        }
      })
  
  $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 2.16){
          $('.sec1').css('opacity', '0')
          $('.sec1').css('filter', textFilterOn)
          $('.sec2').css('filter', textFilterOff)
          $('.sec2').css('opacity', '1')
          $('.sec1').css('top', '-100vh')
          $('.sec2').css('top', '50vh')
          $('.ins1').css('opacity', '0')
          $('.ins2').css('opacity', '1')
          //$('.phone-inside').attr('src','IMGS/music/phoneb2.png')
        }
          
        else{
          $('.sec2').css('filter', textFilterOn)
          $('.sec2').css('opacity', '0')
          $('.sec2').css('top', '100vh')
          //$('.ins1').css('opacity', '1')
          $('.ins2').css('opacity', '0')
          //$('.phone-inside').attr('src','IMGS/music/phoneb1.png')
        }
      })
  $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 2.86){
          $('.sec2').css('opacity', '0')
          $('.sec3').css('opacity', '1')
          $('.sec3').css('filter', textFilterOff)
          $('.sec3').css('top', '50vh')
          $('.sec2').css('top', '-100vh')
          $('.ins2').css('opacity', '0')
          $('.ins3').css('opacity', '1')
          //$('.phone-inside').attr('src','IMGS/music/phoneb3.png')
        }
          
        else{
          $('.ins3').css('opacity', '0')
          $('.sec3').css('filter', textFilterOn)
          $('.sec3').css('opacity', '0')
          $('.sec3').css('top', '100vh')
          
        }
      })
  
  
  $(window).scroll(function(){
        if($(document).scrollTop() > window.innerHeight * 3.56){
          $('.sec3').css('opacity', '0')
          $('.sec3').css('top', '-100vh')
          $('.sec3').css('filter', textFilterOn)
          $('.phone').css('opacity', '0')
          $('.phone').css('transition', '0.5s')
          $('.phone').css('top', '-50vh')
        }
        else{
          
          
        }
      })
  
  
  
/*FULLPAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/      
  ScrollReveal().reveal('.hero1-logo',{
    distance: '-200px',
    viewFactor: 0.5,
    opacity: '0',
    duration: 1000,
    
    })
  ScrollReveal().reveal('.hero1-line1',{
    opacity: '0',
    delay: 250,
    viewFactor: 0.5,
    
  })
  ScrollReveal().reveal('.hero1-line2',{
    opacity: '0',
    delay: 500,
    viewFactor: 0.5,
   
  })
  ScrollReveal().reveal('h6',{
    opacity: '0',
    viewFactor: 0.5,
    delay: 1500,
    
  })
  
  ScrollReveal().reveal('.med',{
    viewFactor: 0.5,
    distance: '500px',
    duration: 1500,
    reset: true
  })
  ScrollReveal().reveal('.sml',{
    viewFactor: 0.3,
    distance: '500px',
    duration: 500,
    reset: true
  })
  ScrollReveal().reveal('.big',{
    viewFactor: 0.2,
    distance: '500px',
    duration: 2500,
    reset: true
  })

  ScrollReveal().reveal('.panel-left',{
    
    viewFactor: 0.4,
    opacity: 0,
    duration: 1500,
    reset: true
  })

  ScrollReveal().reveal('.panel-right',{
    
    viewFactor: 0.4,
    opacity: 0,
    delay: 1000,
    duration: 1500,
    reset: true
  })
  
  ScrollReveal().reveal('.panel-center',{
    viewFactor: 0.4,
    opacity: 0,
    duration: 1500,
    delay: 500,
    reset: true
  })
  
  ScrollReveal().reveal('.footnote',{
    viewFactor: 0.4,
    opacity: 0,
    duration: 1000,
    delay: 3000,
    reset: true
  })

  
  ScrollReveal().reveal('.weirdo1',{
    origin: 'left',
    viewFactor: 0.46,
    distance: '550px',
    duration: 1500,
    reset: true
  })
  ScrollReveal().reveal('.weirdo-text1',{
    //origin: 'right',
    viewFactor: 0.46,
    scale: 0,
    delay: 750,
    duration: 1500,
    reset: true
  })
  
  ScrollReveal().reveal('.weirdo2',{
    origin: 'right',
    viewFactor: 0.46,
    distance: '550px',
    duration: 1500,
    reset: true
  })
  ScrollReveal().reveal('.weirdo-text2',{
    //origin: 'left',
    viewFactor: 0.46,
    scale: 0,
    delay: 750,
    duration: 1500,
    reset: true
  })
  
  ScrollReveal().reveal('.weirdo3',{
    origin: 'left',
    viewFactor: 0.46,
    distance: '-550px',
    duration: 1500,
    reset: true
  })
  ScrollReveal().reveal('.weirdo-text3',{
    //origin: 'right',
    viewFactor: 0.46,
    scale: 0,
    delay: 750,
    duration: 1500,
    reset: true
  })
   
  
  ScrollReveal().reveal('.lasto',{
    //origin: 'left',
    viewFactor: 0.4,
    opacity: 0,
    duration: 1500,
    reset: true
  })
  
})