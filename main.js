var hamburgerMenu = $('.hamburger-menu'); 
var passatoSopra=false;

$('.header-right > a').mouseenter(function () {
    
    while (passatoSopra==false) {
        alert("clicca per aprire il menu");
        passatoSopra=true;
    }   
});


$('.header-right > a').click(function () {
    hamburgerMenu.show();
});

$('a.close').click(function () {
    hamburgerMenu.hide();
});