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

        $('.cancel-button').addClass('display-none')
        $('.search-icon').removeClass('display-none')
        $('.search-icon1').addClass('display-none')
        $('.search-bar').addClass('display-none')
        $('.logo-icon').removeClass('display-none')
        $('.logo').removeClass('display-none')


    });
    // popular
    $('.dropdown-icon-popular').click(function() {
        $('.dropdown-icon-popular').addClass('display-none')
        $('.dropdown-icon-popular-1').removeClass('display-none')
        $('.popular-products').addClass('display-none')

    });
    $('.dropdown-icon-popular-1').click(function() {
        $('.dropdown-icon-popular-1').addClass('display-none')
        $('.dropdown-icon-popular').removeClass('display-none')
        $('.popular-products').removeClass('display-none')

    });
    // topseller
    $('.dropdown-icon-top-seller').click(function() {
        $('.dropdown-icon-top-seller').addClass('display-none')
        $('.dropdown-icon-top-seller-1').removeClass('display-none')
        $('.top-seller-products').addClass('display-none')

    });
    $('.dropdown-icon-top-seller-1').click(function() {
        $('.dropdown-icon-top-seller-1').addClass('display-none')
        $('.dropdown-icon-top-seller').removeClass('display-none')
        $('.top-seller-products').removeClass('display-none')

    });
    // bestseller
    $('.dropdown-icon-best-seller').click(function() {
        $('.dropdown-icon-best-seller').addClass('display-none')
        $('.dropdown-icon-best-seller-1').removeClass('display-none')
        $('.best-seller-products').addClass('display-none')

    });
    $('.dropdown-icon-best-seller-1').click(function() {
        $('.dropdown-icon-best-seller-1').addClass('display-none')
        $('.dropdown-icon-best-seller').removeClass('display-none')
        $('.best-seller-products').removeClass('display-none')

    });
    // var menSection = $('.men');
    // menSection.click(function() {
    //     $('.mobile-container').addClass('display-none');
    //     $('.mobile-container').load('beauty.html');
    // });

});