// ########## Header ############
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(navLink => navLink.addEventListener('click', linkAction));


// ##########  skills #############
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = ('skills__content skills__open');
    }

}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// ########  Qualification #############


const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// ########  Scrollup #############
function scrollup(){
    const scrollup =document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll');else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

// ########  Scroll model #############
const sections=document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY =window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionTop =current.offsetTop -50;
        sectionId =current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[herf*=' + sectionId +']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[herf*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

// ########  Services model #############

document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll(".services__button");
    const modalCloses = document.querySelectorAll(".services__modal-close");

    modalButtons.forEach((modalButton) => {
        modalButton.addEventListener("click", function () {
            const modal = modalButton.closest(".services__content").querySelector(".services__modal");
            modal.classList.add("active-modal");
        });
    });

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener("click", function () {
            const modal = modalClose.closest(".services__modal");
            modal.classList.remove("active-modal");
        });
    });
});

// ##########    Dark light theme       ##########



const themeButton =document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme = 'bi bi-brightness-high'


const selectedTheme =localStorage.getItem('selectd-theme')
const selectedIcon =localStorage.getItem('selectd-icon')


const getCurrentTheme =()=> document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'bi bi-moon' : 'bi bi-brightness-high';

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bi bi-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

