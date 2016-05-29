$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['headline', 'about', 'architecture', 'digital'],
        menu: '#menu',
        scrollingSpeed: 1500,
        css3: true,
        responsiveHeight: 600,
        fitToSection: false,
        
        
        afterLoad: function(anchorLink, index){
            var activeSection = $('.fp-section').eq(index - 1);
            var activeSlide = activeSection.find('.fp-slide.active');
            var activeSlideIndex = activeSlide.index();
            
            //after loading the 0th (first) slide
            if (activeSlideIndex == 0){
                $('div.fp-controlArrow.fp-prev').removeClass('showarrow');
                $('div.fp-controlArrow.fp-next').removeClass('turquoisearrow');
            }
            else{
                $('div.fp-controlArrow.fp-prev').addClass('showarrow');
                $('div.fp-controlArrow.fp-next').addClass('turquoisearrow');
            }
        },
        
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            var loadedSlide = $(this);
            //after loading the 0th (first) slide
            if (slideIndex == 0){
                $('div.fp-controlArrow.fp-prev').removeClass('showarrow');
                $('div.fp-controlArrow.fp-next').removeClass('turquoisearrow');
            }
            else{
                $('div.fp-controlArrow.fp-prev').addClass('showarrow');
                $('div.fp-controlArrow.fp-next').addClass('turquoisearrow');
            }
         },
        
        onLeave: function(index, nextIndex, direction){
            //leaving 1st section
            if(index == 1){
                $('nav').addClass('shrink');
                $('.logo1').addClass('invisible');
                $('.logo2').removeClass('invisible');
                $('#navbtns').removeClass('invisible');
            }
            //back to the 1st section
            if(nextIndex == 1){
                $('nav').removeClass('shrink');
                $('.logo1').removeClass('invisible');
                $('.logo2').addClass('invisible');
                $('#navbtns').addClass('invisible');
            }
        },
        

     
    });
    

    $('#navbtns').click(function() {
        $(this).toggleClass('open');
    });


    $('.infopanel').each(function () {
        $(this).find('.panel').hide();
        $(this).find('.flip').click(function (){
            $(this).parent().find('.panel').slideToggle("slow");
        });
    });
    
    // For each .box element
  $('.portfolio').each(function() {
    // Set up the variables
    var $this = $(this),

        h = $this.find('img').height(); // Height of the image inside .slide
        $(".portfolio panel").css({   height: 'h' });
  });

});

