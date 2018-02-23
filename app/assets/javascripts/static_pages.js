$( document ).ready(function() {
  $('.card').on('click', function() {
  	$(this).toggleClass('guide-trigger');
    $(this).toggleClass('hover-trigger');
  });
  $( ".card" ).hover(
    function() {
      if (!$(this).hasClass("guide-trigger")) {
        $( this ).addClass( "hover-trigger" );
      }
    }, function() {
      $( this ).removeClass( "hover-trigger" );
    }
   );
});
