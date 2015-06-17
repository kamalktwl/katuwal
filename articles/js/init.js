(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });

  }); // end of document ready

  $(document).ready(function(){
      $('.slider').slider({
        full_width: true,
        indicators: false,
        
      });
    });
  $('.dropdown-button').dropdown({
      
      hover: true, // Activate on hover
     constrain_width: false,
    }
  );
  
})(jQuery); // end of jQuery name space