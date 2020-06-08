$(main);
// the main funk
function main(){

    $('.tab-1').css({
        'border-bottom' : '7px solid #FCE141'
    });

    $('.input-big').hide();
    $('.input-small').fadeIn();
   

    $('.tab-1').click(function(){

        $(this).css({
            'border-bottom' : '7px solid #FCE141'
        })

        $('.tab-2').css({
            'border-bottom' : 'none'
        });

        $('.input-big').hide();
        $('.input-small').fadeIn();

    });


    $('.tab-2').click(function(){

        $(this).css({
            'border-bottom' : '7px solid #FCE141'
        });
        $('.tab-1').css({
            'border-bottom' : 'none'
        });



        $('.input-small').hide();
        $('.input-big').fadeIn();

    });






}