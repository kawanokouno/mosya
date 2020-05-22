$(function () {
    'use strict'

    {



        for (let i = 1; i <= 16; i++) {
            const option = document.createElement('option');
            option.textContent = (`ゲスト${i}人`);
            $('#member').prepend(option);

        }



        const pagetop = $('.pagetop');
        const header =$('.header-fixed');
        header.hide();
        
        

        $(window).scroll(function () {

            if ($(this).scrollTop() > 500 && $(this).scrollTop() <6200) {
                
                pagetop.show();

            }　else {
                pagetop.hide();
            }

        });

        $(window).scroll(function () {

            if ($(this).scrollTop() > 500) {
                
                header.fadeIn();

            }　else {
                header.fadeOut();
            }

        });

    
    

 











    }

});


