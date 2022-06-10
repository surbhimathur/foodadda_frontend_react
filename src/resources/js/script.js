import $ from 'jquery';
import React from 'react'

function script() {
  $(document).ready(function(){
    
    $('.js--features').waypoint(function(direction){
        if(direction ==="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },
    {
        offset:'60px;'
    });
                               
                               
        $('.js-scroll-to-plans').click(function(){
            
          $('html,body').animate({scrollTop:$('.js-plans').offset().top},1000);
        });
    
    $('.js-scroll-to-start').click(function(){
            
          $('html,body').animate({scrollTop:$('.js--features').offset().top}, 1000);
        });
    
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      // eslint-disable-next-line no-restricted-globals
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
      && 
      // eslint-disable-next-line no-restricted-globals
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
    
});
  
}

export default script
