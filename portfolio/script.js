// // let menuIcon = document.querySelectorAll('#menu-icon');
// let navbar = document.querySelectorAll('.navbar');

// menuIcon.forEach(icon => {
//   icon.onclick = () => {
//     icon.classList.toggle('fa-brands');
//     navbar.forEach(nav => nav.classList.toggle('active'));
//   }
// });


// // Add an "active" class to the clicked link
// $('a[href*="#"]')
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // Remove any existing "active" class from links
//     $('a').removeClass('active');

//     // Add "active" class to clicked link
//     $(this).addClass('active');

//     // Smooth scroll to target as before
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

//       if (target.length) {

//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 900, function() {
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { 
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); 
//             $target.focus(); 
//           };
//         });
//       }
//     }
//   });

// // Set initial active link based on URL hash
// $(document).ready(function() {
//   var hash = window.location.hash;
//   if (hash) {
//     $('a[href="' + hash + '"]').addClass('active');
//   }
//   let header=document.querySelectorAll('header');
// header.classList.toggle('sticky',window.scrollY >100);
// });

// ScrollReveal({
//     reset:true,
//     distance:'80px',
//     duration:2000,
//     delay:200
// });

// ScrollReveal().reveal('.home-content, .heading',{ origin:'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left' });
// ScrollReveal().reveal('.home-content p, .about-content',{ origin:'left' });


const typed=new Typed('.multiple-text',{
    strings:['CSE undergrad','Web Dev Learner','Coding enthusiast' ],
    typeSpeed:100,
    backSpped:100,
    backDelay:1000,
    loop:true

});
