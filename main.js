var hamburgerMenu = $('.hamburger-menu'); 

$('.header-right > a').click(function () {
    hamburgerMenu.show();
});

$('a.close').click(function () {
    hamburgerMenu.hide();
});