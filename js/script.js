$(document).ready(function(){
    $(this).scrollTop(0);
});
setTimeout(function(){
    $('.logo').addClass('vanishIn');
}, 1000);
setTimeout(function(){
    $('.entry-form').addClass('vanishIn')
}, 2000);



send_mail = function(name, email) {
    Email.send({
        Host : "outlook.office365.com",
        Username : "bartlomiej.szywala@fasanara.com",
        Password : "group#Y2kt",
        To : 'bartlomiej.szywala@fasanara.com',
        From : "bartlomiej.szywala@fasanara.com",
        Subject: "New Subscriber from Fintech page",
        Body : "The new subscriber nameis "+name+" and his email is "+email
    })
    //     .then(
    //   message => alert(message)
    // );
};
verify_email = function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
verify_name = function validateName(name){
    var re = /^[A-Za-z]+$/
    return re.test(String(name))
};

submitEmail = function() {

    subscriber = $('.name-input').val();
    subscriberEmail = $('.email-input').val();

    emailCompleted = true;
    nameCompleted = true;

    // emailCompleted = false;
    // nameCompleted = false;

    // if(verify_email(subscriberEmail) == true) {
    //     emailCompleted = true
    //     $('.email-input').removeClass('not-completed')
    // }
    // if(verify_name(subscriber)==true){
    //     nameCompleted = true
    //     $('.name-input').removeClass('not-completed')
    // }
    // if(emailCompleted == false){
    //     $('.email-input').addClass('not-completed')
    // }
    // if(nameCompleted == false){
    //     $('.name-input').addClass('not-completed')
    // }
    if(emailCompleted==true && nameCompleted==true){
        // send_mail(subscriber, subscriberEmail)
        
        $('.logo-pass').addClass('open');
        $('.logo').addClass('open');
        $('.black-header').addClass('open');
        $('.entry-form').removeClass('vanishIn');
        $('.entry-form').addClass('remove');
        $('body').addClass('open')
        $('.navbar').addClass('open')
        $('.nav-container').addClass('open')
    }

}
$('.submit').click(submitEmail)

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
