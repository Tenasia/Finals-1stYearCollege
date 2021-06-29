$(function() {
    $('.link').click(function() {
        $('.link').removeClass('active');
        $(this).addClass('active');

    });
    $('.search-icon').click(function() {
        $('.search-icon').addClass('display-none')
        $('.search-icon1').removeClass('display-none')
        $('.logo-icon').addClass('display-none')
        $('.logo').addClass('display-none')
        $('.search-bar').removeClass('display-none')
        $('.cancel-button').removeClass('display-none')
    });
    $('.cancel-button').click(function() {
        //
        $('.cancel-button').addClass('display-none')
        $('.search-icon').removeClass('display-none')
        $('.search-icon1').addClass('display-none')
        $('.search-bar').addClass('display-none')
        $('.logo-icon').removeClass('display-none')
        $('.logo').removeClass('display-none')


    });
});