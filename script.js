const fonts = [
    'Arial, sans-serif',
    'Times New Roman',
    'Courier New',
    'Georgia',
    'Verdana'
];

let fontIndex = 0;
let currentMemberIndex = 1;

function changeFont() {
    const discountText = document.querySelector('.discount-text');
    if (discountText) {
        discountText.style.fontFamily = fonts[fontIndex];
        fontIndex = (fontIndex + 1) % fonts.length;
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function adjustBannerHeight() {
    const banner = document.querySelector('.banner');
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const newBannerHeight = windowHeight - headerHeight;
    banner.style.height = newBannerHeight + 'px';
}

function closeMenuOnScroll() {
    if (isMenuOpen && window.scrollY > scrollThreshold) {
        isMenuOpen = false;
        menu.classList.remove('show-nav');
    }
}

function setMemberContent(content) {
    const member2 = document.querySelector('.team-member.member2');
    if (member2) {
        member2.querySelector('img').src = content.image;
        member2.querySelector('h2').textContent = content.name;
        member2.querySelector('p').textContent = content.experience;
        member2.querySelector('.bold-text').textContent = content.role;
    }
}

const member1Content = {
    image: 'images/member1.png',
    name: 'Henk-jan Schoonbeek',
    experience: 'Kapper met 15+ jaar ervaring en eigenaar van kapperszaak Haircut™.',
    role: 'Eigenaar'
};

const member2Content = {
    image: 'images/member2.png',
    name: 'Petra Plasman',
    experience: 'Onze vrouwelijke kapster met 29+ jaar ervaring in de industrie.',
    role: 'Senior stylist'
};

const member3Content = {
    image: 'images/member3.png',
    name: 'Aart van de Vaart',
    experience: 'Snelle kapper met een knappe kop met 3+ jaar ervaring.',
    role: 'Junior stylist'
};

function changeMember(step) {
    if (step === -1) {
        currentMemberIndex = (currentMemberIndex - 1 + 3) % 3;
    } else {
        currentMemberIndex = (currentMemberIndex + 1) % 3;
    }

    if (currentMemberIndex === 0) {
        setMemberContent(member1Content);
    } else if (currentMemberIndex === 1) {
        setMemberContent(member2Content);
    } else if (currentMemberIndex === 2) {
        setMemberContent(member3Content);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    const teamMembers = document.querySelectorAll('.team-member');
    const prevMemberButton = document.getElementById('prev-member');
    const nextMemberButton = document.getElementById('next-member');

    prevMemberButton.addEventListener('click', () => {
        changeMember(-1);
    });

    nextMemberButton.addEventListener('click', () => {
        changeMember(1);
    });
});

setInterval(changeFont, 500);

const scrollArrow = document.getElementById('scroll-arrow');
scrollArrow.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('main');
});

const banner = document.querySelector('.banner');
banner.addEventListener('click', function (event) {
    if (event.target !== scrollArrow) {
        window.location.href = 'boeken.html';
    }
});

document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('main');
});

document.getElementById('opening-hours-link').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('opening-hours-section');
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
let isMenuOpen = false;
let scrollThreshold = 200;

hamburgerMenu.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle('show-nav', isMenuOpen);
});

window.addEventListener('resize', adjustBannerHeight);
window.addEventListener('load', adjustBannerHeight);
window.addEventListener('scroll', closeMenuOnScroll);