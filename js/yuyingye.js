(function () {
    $(document).ready(function() {
        $('#data_2017').click (function () {

            $('#list_2017').css('display','block');
            $('#list_2016').css('display','none');
            $('.click_on').removeClass('click_on');
            $(this).addClass('click_on');

        });



        $('#data_2016').click(function () {

            $('#list_2017').css('display','none');
            $('#list_2016').css('display','block');
            $('.click_on').removeClass('click_on');
            $(this).addClass('click_on');

        });



    })
})();