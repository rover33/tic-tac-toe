var counter = 0;

$("td").click(function() {
    if ($(this).html() == '') {
        if ((counter % 2) == 0) {
            $(this).html('x');
            counter ++;
        } else {
            $(this).html('o');
            counter ++;
        }  
    } 
    
});

$('#reset').click(function(){
    $('.cell').html("");
});