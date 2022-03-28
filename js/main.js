$(document).on('ready', function(){
    $('#my-element').click(function(){
        $(this).css({
            color: 'blue',
            backgroundColor: 'green'
        });
    });
});