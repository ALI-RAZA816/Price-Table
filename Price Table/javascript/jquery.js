$(document).ready(function(){
    $('.switch').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var isActive = $(this).data('switch-monthly') === 'monthly';
        $('.price').each(function(){
            var monthlyprice = $(this).data('monthly-price');
            var yearlyprice = $(this).data('yearly-price');

            if(isActive){
                $(this).text(monthlyprice);
                $('.duration').text('/monthly');
            }else{
                $(this).text(yearlyprice);
                $('.duration').text('/yearly');
                
            }
        })
    });
})