function show(){
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "0";
}

function closenav(){
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "-110%";
}

function scrollToHome(){
    var home = document.querySelector(".home-home")
    home.scrollIntoView({behavior:'smooth'})
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "-110%";
}

function scrollToAbout(){
    var about = document.querySelector(".about-about")
    about.scrollIntoView({behavior:'smooth'})
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "-110%";
}

function scrollToSkills(){
    skill = document.querySelector(".skills-skills")
    skill.scrollIntoView({behavior:'smooth'})
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "-110%";
}

function scrollToWork(){
    work = document.querySelector(".work-work")
    work.scrollIntoView({behavior:'smooth'})
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "-110%";
}

function scrollToContact(){
    contact = document.querySelector(".contact-contact")
    contact.scrollIntoView({behavior:'smooth'})
    var sidenav = document.querySelector(".side-navbar")
    sidenav.style.left = "-110%";
}

function send(){
    alert("Details send successfully...!")
}
