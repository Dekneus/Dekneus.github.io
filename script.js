let articleButtons = document.querySelectorAll('.article-buttons button');
let VakTitel = document.getElementById('Title');
let VakDescription = document.getElementById('Desc');

let buttonContent = [
    { title: "LOB", description: "LOB is een chill vak" },
    { title: "Database", description: "Database https://www.youtube.com/watch?v=MtPBQ4BhzOY" },
    { title: "Engels", description: "Inglis is easy vak" },
    { title: "GIT", description: "GIT.. We hebben het niet over GIT.." },
    { title: "HTML/CSS", description: "HTML/CSS is een episch vak" },
    { title: "IPFS", description: "IPFS is een bijzonder vak" },
    { title: "Linux", description: "Linux is een vak voor kelder bewoners" },
    { title: "Nederlands", description: "Nederlands is een kwalitatief uitermate teleurstellend vak" },
    { title: "Rekenen", description: "Two plus two is four, minus one thats three quick maths" },
    { title: "SCRUM", description: "SCRUM is n ok vak I guess" },
    { title: "SLB", description: "SLB ik begin carpeltunnel te krijgen help" },
    { title: "Zakelijke Communicatie", description: "Zakelijke communicatie. Waarom zit dit niet bij Nederlands..?" },
    { title: "Burgerschap", description: "Burgerschap ..." },
    { title: "Greenfoot", description: "Greenfoot is srs gewoon gamemaker voor volwassenen" },
];

let selectedButton = null;

articleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (selectedButton) {
            selectedButton.style.backgroundColor = "#8d1c7c";
            selectedButton.style.transform = "scale(1)";
        }

        button.style.transform = "scale(1.1)";
        selectedButton = button;

        VakTitel.textContent = buttonContent[index].title;
        VakDescription.textContent = buttonContent[index].description;
    });

    button.addEventListener('mouseover', () => {
        if (button !== selectedButton) {
            button.style.backgroundColor = getRandomColor();
        }
    });

    button.addEventListener('mouseout', () => {
        if (button !== selectedButton) {
            button.style.backgroundColor = "#8d1c7c";
        }
    });
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var nav = document.querySelector('nav');
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

let title = document.getElementById('typewriter-title');
let text = title.innerText;
let i = 0;
let isDeleting = false;

function type() {
    if (i <= text.length && !isDeleting) {
        title.innerHTML = text.substring(0, i) + '<span id="underscore">_</span>';
        i++;
        setTimeout(type, 100);
    } else if (i >= 0 && isDeleting) {
        title.innerHTML = text.substring(0, i) + '<span id="underscore">_</span>';
        i--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        setTimeout(type, 1000);
    }
}

setTimeout(type, 1000);