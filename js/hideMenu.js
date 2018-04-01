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
    });
});