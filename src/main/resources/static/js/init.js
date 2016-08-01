(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel({
    	full_width:true,
        shift:200
    });

    window.setInterval(function(){$('.carousel').carousel('next')},7000);

    $('select').material_select();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space