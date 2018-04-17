$(document).ready(function(){
    $(function(){
        $('#showPhoneNav').click(function(){
            $('#myNav').slideToggle('normal', function(){
                if($('#myNav').is(':visible')){
                    $('#showPhoneNav').addClass('change');
                } else{
                    $('#showPhoneNav').removeClass('change');
                }
            });
        });

        $(window).on('resize', function(){
            var win = $(this); //this = window
            if (win.width() >= 641) { /* ... */ 
                $('#myNav').css('display', 'block');
            }
            else {
               
            }
      });
    });
});