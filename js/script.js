setTimeout(function(){
    $('.logo').addClass('vanishIn');
}, 1000);
setTimeout(function(){
    $('.entry-form').addClass('vanishIn')
}, 2000);

submitPassword = function() {
    $('.black-header').addClass('open');
    $('.logo-pass').addClass('open');
    $('.logo').addClass('open');
    $('.entry-form').removeClass('vanishIn');
    $('.entry-form').addClass('remove');
    $('body').addClass('open')
}
$('.password-submit').click(submitPassword)

ScrollReveal().reveal('.iframe', { duration: 1300 });
ScrollReveal().reveal('.video-header', { duration: 1300 });
ScrollReveal().reveal('.discover-container', { duration: 1300 });
ScrollReveal().reveal('.market-leader-section', { duration: 1300 });
ScrollReveal().reveal('.portfolio-section', { duration: 1300 });
ScrollReveal().reveal('.edge-section', { duration: 1300 });
ScrollReveal().reveal('.philosophy-section', { duration: 1300 });
ScrollReveal().reveal('#quote1', { duration: 1300 });
ScrollReveal().reveal('#quote2', { duration: 1300 });
ScrollReveal().reveal('.infographic-section', { duration: 1300 });
