// toggle icon navebar

let menuIcon=document.querySelector('#menu-icon');
let navebar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navebar.classList.toggle('active');
};




// scroll section active link
let section = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll  = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top <offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[ href *=' +id + ']').classList.add('active');
            });
        };
    });

    let header =querySelectorAll('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon when you are click in manuicon
    menuIcon.classList.remove('bx-x');
    navebar.classList.remove('active');

};

// **** scroll reveal ****

ScrollReveal({
//    reset:true,
   distance: '80px',
   duration: 2000,
   delay:200
});
ScrollReveal().reveal('.home-contect, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container , .portfolio-box , .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contect h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contect p, .about-content',{origin:'right'});

// **** scroll reveal ****

const typed = new Typed('.multiple-text',{
    strings: ['Web Developer','Blogger','Application Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

