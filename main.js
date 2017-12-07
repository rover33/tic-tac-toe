var counter = 0;

$("td").click(function() {
    if ($(this).html() == '') {
        if ((counter % 2) == 0) {
            $(this).html('x').css('color', 'purple');
            counter ++;
        } else {
            $(this).html('o').css('color', 'white');
            counter ++;
        }  
    } 
    
});

$('#reset').click(function(){
    $('.cell').html("");
    counter = 0;
});