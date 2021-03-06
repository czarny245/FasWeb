// import SimpleCrypto from "simple-crypto-js";

$(document).ready(function(){
    $(this).scrollTop(0);
});
setTimeout(function(){
    $('.logo').addClass('vanishIn');
}, 1000);
setTimeout(function(){
    $('.first-choice').addClass('vanishIn')
}, 2000);



send_mail = function(name, email) {
    Email.send({
        Host : "outlook.office365.com",
        Username : "bartlomiej.szywala@fasanara.com",
        Password : "group#Y2kt",
        To : 'francesco.filia@fasanara.com',
        // To : "bartlomiej.szywala@fasanara.com",
        From : "bartlomiej.szywala@fasanara.com",
        Subject: "New Subscriber from Fintech page",
        Body : "The new subscriber name is: "+name+" and his email is: "+email
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
    var re = /^[a-zA-Z ]*$/;
    return re.test(String(name))
};

submitEmail = function() {

    subscriber = $('.name-input').val();
    subscriberEmail = $('.email-input').val();

    emailCompleted = true;
    nameCompleted = true;

    emailCompleted = false;
    nameCompleted = false;

    if(verify_email(subscriberEmail) == true) {
        emailCompleted = true
        $('.email-input').removeClass('not-completed')
    }
    if(verify_name(subscriber)==true){
        nameCompleted = true
        $('.name-input').removeClass('not-completed')
    }
    if(emailCompleted == false){
        $('.email-input').addClass('not-completed')
    }
    if(nameCompleted == false){
        $('.name-input').addClass('not-completed')
    }
    if(emailCompleted==true && nameCompleted==true){
        send_mail(subscriber, subscriberEmail)

        $('.submit').addClass('inactive')
        
        $('.entry-form').removeClass('vanishIn');
        $('.entry-form').removeClass('rollout');
        $('.entry-form').addClass('vanishOut');
        setTimeout(function(){
            $('.password-form').removeClass('rollin');
            $('.password-form').addClass('rollout');
            $('.password-form').addClass('vanishIn');
        }, 600);
        setTimeout(function(){
            $('.confirmation-text').addClass('display')
        }, 600);


    }

}
showSignUp = function() {
    setTimeout(function(){
        $('.first-choice').addClass('rollin');
    }, 500);
    $('.first-choice').addClass('vanishOut');
    setTimeout(function(){
        $('.entry-form').removeClass('rollin');
        $('.entry-form').addClass('rollout');
    }, 600);
    setTimeout(function(){
        $('.entry-form').removeClass('vanishOut');
        $('.entry-form').addClass('vanishIn');
    }, 700);
}

showPasswordForm = function() {
    setTimeout(function(){
        $('.first-choice').addClass('rollin');
    }, 500);
    $('.first-choice').addClass('vanishOut');
    setTimeout(function(){
        $('.password-form').removeClass('rollin');
        $('.password-form').addClass('rollout');
    }, 600);
    setTimeout(function(){
        $('.password-form').removeClass('vanishOut');
        $('.password-form').addClass('vanishIn');
    }, 700);
}

submitPassword = function() {
    pass = $('.password-input').val();

    var encrypted = CryptoJS.AES.encrypt(pass, "fasanara");
    var decrypted = CryptoJS.AES.decrypt(encrypted, "fasanara");
    // console.log(decrypted.toString())
    if (decrypted.toString() == "66696e746563683535"){
        $('.logo-pass').addClass('open');
        $('.logo').addClass('open');
        $('.black-header').addClass('open');
        $('.password-form').removeClass('vanishIn');
        $('.password-form').addClass('vanishOut');
        $('.password-form').removeClass('rollin');
        $('.password-form').addClass('rollout');
        $('body').addClass('open')
        $('.navbar').addClass('open')
        $('.nav-container').addClass('open')  
    } else {
        $('.password-input').addClass('not-completed')
    }
}

goToFirstChoice = function() {
    $('.password-form').addClass('vanishOut');
    $('.entry-form').addClass('vanishOut');
    setTimeout(function(){
        $('.password-form').addClass('rollin');
    }, 500);
    setTimeout(function(){
        $('.entry-form').addClass('rollin');
    }, 500);
    setTimeout(function(){
        $('.first-choice').removeClass('rollin');
        $('.first-choice').addClass('rollout');
    }, 600);
    setTimeout(function(){
        $('.first-choice').removeClass('vanishOut');
        $('.first-choice').addClass('vanishIn');
    }, 700);
}

$('.submit').click(submitEmail)
$('.sign-up-button').click(showSignUp)
$('.enter-button').click(showPasswordForm)
$('.back-button').click(goToFirstChoice)
$('.pass-submit').click(submitPassword)
// $('.password-input').addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key === 13) {submitPassword}
// });
// $('.email-input').addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key === 13) {submitEmail}
// });
function inputKeyUpPass(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        submitPassword
    }
}
function inputKeyUpEmail(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        submitEmail
    }
}
document.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        submitEmail;}
  })


ScrollReveal().reveal('.iframe', { duration: 2000 });
ScrollReveal().reveal('.video-header', { duration: 2000 });
ScrollReveal().reveal('.discover-container', { duration: 2000 });
ScrollReveal().reveal('.market-leader-section', { duration: 2000 });
ScrollReveal().reveal('.portfolio-section', { duration: 2000 });
ScrollReveal().reveal('.edge-section', { duration: 2000 });
ScrollReveal().reveal('.philosophy-section', { duration: 2000 });
ScrollReveal().reveal('#quote1', { duration: 2000 });
ScrollReveal().reveal('#quote2', { duration: 2000 });
ScrollReveal().reveal('.infographic-section', { duration: 2000 });
ScrollReveal().reveal('.quote-custom', { duration: 2000 });
ScrollReveal().reveal('.quote-box-custom', { duration: 2000 });
ScrollReveal().reveal('h1', { duration: 2000 });
ScrollReveal().reveal('p', { duration: 2000 });
ScrollReveal().reveal('iframe', { duration: 2000 });
