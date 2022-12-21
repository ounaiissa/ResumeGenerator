$('document').ready(function(){
    $('#all').click(function(){
        $('.all').show();
        $('.disponible').hide();
    });

    $('#disponible').click(function(){
        $('.disponible').show();
        $('.all').hide();
    });
})