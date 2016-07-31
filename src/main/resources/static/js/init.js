(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel({
    	full_width:true,
    });

    window.setInterval(function(){$('.carousel').carousel('next')},7000)

  }); // end of document ready
})(jQuery); // end of jQuery name space