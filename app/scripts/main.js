$(document).ready(function() {
  pepit();
  $('#fullpage').fullpage({
    'anchors':['home', 'ux', 'webdesign', 'appdesign', 'contact'],
    'sectionsColor' : ['#28384C', '#ff8d27', '#fff', '#88d3cf', '#d9d9d9'],
    'loopBottom': true,
    'verticalCentered': false,
    'fixedElements': '#fixed',
    'touchSensitivity':5,
    'normalScrollElements': '.mb-images',
  
    'afterSlideLoad': function(anchorLink, index, slideAnchor, slideIndex) {

      $('div.intro').delay(400).css({'opacity':'1','transform':'translateX(0px)'});

      if (slideAnchor == 'css')  {
        $('div.slide[data-anchor="css"] h1').css({'opacity':'1','margin-top':'50px'});
        $('div.slide[data-anchor="css"] h2').css({'opacity':'1','margin-left':'30%','transition-delay':'200ms'});
      }

      if (slideAnchor == 'gt') {
        $('div.gt_logo img').css({'opacity':'1','width':'481px','height':'156px','transition-delay':'400ms'});
        $('div.gt_logo').css('opacity','1');
      }

      if (slideAnchor == 'sd') {
        $('div.phones img:nth-child(2)').css({'opacity':'1','margin-top':'0'});
        $('div.phones img:nth-child(3)').css({'opacity':'1','margin-top':'0', 'transform':'translateX(60%)', 'transition-delay':'100ms'});
        $('div.phones img:nth-child(1)').css({'opacity':'1','margin-top':'0', 'transform':'translateX(120%)', 'transition-delay':'200ms'});
        $('div.ux-headings h1').css({'opacity':'1', 'transition-delay':'600ms'});
        $('div.ux-headings h2').css({'opacity':'1', 'transition-delay':'1s'});     

      }
 
      if (slideAnchor == 'print') {
        
        $('.one').css({'opacity':'1','margin-top':'25px'});
        $('.two').css({'opacity':'1','margin-top':'-330px','transition-delay':'200ms'});

        $('div.headings h1').css('opacity','1');
        $('div.headings h2').css({'opacity':'1','transition-delay':'200ms'});

      }

    },
    
    'onSlideLeave': function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      if (slideIndex == 0)  {

        $('div.slide[data-anchor="css"] h1, div.slide[data-anchor="css"] h2').removeAttr('style');
      }

      if (slideIndex == 2) {
        $('div.gt_logo img, div.gt_logo').removeAttr('style');
      }

      if (slideIndex == 1) {
        $('div.phones img:nth-child(1), div.phones img:nth-child(2),\
          div.phones img:nth-child(3), div.ux-headings h1,\
          div.ux-headings h2').removeAttr('style');
      }

      if (slideIndex == 3) {
        $('.one, .two, div.headings h1, div.headings h2')
        .removeAttr('style');
      }

    },
    'onLeave': function(index, nextIndex, direction){
      $('.mb-images').css({'opacity':'0','transform':'translateY(1500px)'});
      $('div.tanya_screenshot img').removeAttr('style');
      $('div.tanya_mockup div img').removeAttr('style');
      $('div.tanya_headings h1, div.tanya_headings a').removeAttr('style');
      $('div.sd-mockup div, div.sd-icons, div.sd-backgrounds div').removeAttr('style');
    },
    
    'afterLoad': function(anchorLink, index){
      if (anchorLink == 'home'){
        $('#fixed').hide();
        $('div.slide[data-anchor="css"] h1').css({'opacity':'1','margin-top':'50px', 'transition-delay':'400ms'});
        $('div.slide[data-anchor="css"] h2').css({'opacity':'1','margin-left':'30%','transition-delay':'600ms'});
      }
      else {
        $('#fixed').show();
      }
      if (anchorLink == 'ux') {
        $('.mb-images'). css({'opacity':'1','transform':'translateY(0px)'});
      }
      if (anchorLink == 'webdesign') {
        $('div.tanya_screenshot img').css({'margin-left':'-35%', 'opacity':'1'});
        $('div.tanya_mockup div img').css({'margin-top':'0', 'opacity':'1', 'transition-delay':'400ms'});
        $('div.tanya_headings h1, div.tanya_headings a').css('opacity','1');
      }
      if (anchorLink == 'appdesign') {
        $('div.sd-mockup div').css({'opacity':'1','margin-left':'0','transition-delay':'400ms'});
        $('div.sd-icons').css({'opacity':'1','margin-top':'0'});
        $('div.sd-backgrounds div').css({'opacity':'1','margin-top':'0','transition-delay':'100ms'});
      }
    }
  })
  
  $('.fp-controlArrow.fp-next').html('<span class="fui-arrow-right"></span>');
  
  $('.fp-controlArrow.fp-prev').html('<span class="fui-arrow-left"></span>');

});

function pepit() {
  $('.pep').pep({
    useCSSTranslation: false,
    constrainTo: 'parent'
  }); 
  $('.pep:nth-child(1)').css('bottom','0');
  $('.pep:nth-child(2)').css({'left':'20%', 'top':'0px', 'box-shadow':'none'});
  $('.pep:nth-child(3)').css({'left':'45%', 'top':'5%', 'box-shadow':'none'});
  $('.pep:nth-child(4)').css({'left':'15%', 'top':'5%'});
  $('.pep:nth-child(5)').css({'left':'20%', 'bottom':'0'});
}
/*$('.pep2').pep({
  useCSSTranslation: false,
  constrainTo: 'parent',
  axis: 'x'
})*/