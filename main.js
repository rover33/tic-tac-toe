var counter = 0;
$("td").click(function() {
    if ($(this).html() == '') {
        if ((counter % 2) == 0) {
            $(this).html('x').css({'color': 'purple', 'background': 'white'});

            if (
                 ($('#1').html()=='x' && $('#2').html()=='x' && $('#3').html()=='x') ||
                
                 ($('#4').html()=='x' && $('#5').html()=='x' && $('#6').html()=='x') ||
                  
                 ($('#7').html()=='x' && $('#8').html()=='x' && $('#9').html()=='x') ||
                       
                ($('#1').html()=='x' && $('#4').html()=='x' && $('#7').html()=='x') ||
                           
                ($('#2').html()=='x' && $('#5').html()=='x' && $('#8').html()=='x') ||
                               
                ($('#3').html()=='x' && $('#6').html()=='x' && $('#9').html()=='x') ||
                                   
                ($('#1').html()=='x' && $('#5').html()=='x' && $('#9').html()=='x') ||
                                        
                ($('#3').html()=='x' && $('#5').html()=='x' && $('#7').html()=='x')){
                    alert('winner player 1');
                                            
            }
            counter ++;
        } else {
            $(this).html('o').css({'color': 'white', 'background': 'purple'});

            if (
                ($('#1').html()=='o' && $('#2').html()=='o' && $('#3').html()=='o') ||
               
                ($('#4').html()=='o' && $('#5').html()=='o' && $('#6').html()=='o') ||
                 
                ($('#7').html()=='o' && $('#8').html()=='o' && $('#9').html()=='o') ||
                      
               ($('#1').html()=='o' && $('#4').html()=='o' && $('#7').html()=='o') ||
                          
               ($('#2').html()=='o' && $('#5').html()=='o' && $('#8').html()=='o') ||
                              
               ($('#3').html()=='o' && $('#6').html()=='o' && $('#9').html()=='o') ||
                                  
               ($('#1').html()=='o' && $('#5').html()=='o' && $('#9').html()=='o') ||
                                       
               ($('#3').html()=='o' && $('#5').html()=='o' && $('#7').html()=='o')){
                   alert('winner player 2');

        }  
        counter ++;
    }}
    
});

$('#reset').click(function(){
    $('.cell').html("").css('background','black');
    counter = 0;
});
