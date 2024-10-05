AOS.init();

const hbgr = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hbgr.addEventListener('click', () => {
    hbgr.classList.toggle("active");
    menu.classList.toggle("active");
});

const imgLink = document.querySelector(".logoimg");
imgLink.addEventListener('click', () => {
    window.location.href = "../HTML/index";
});

const navbarDonate = document.getElementById('navbar-donate');
navbarDonate.addEventListener('click', () => {
    window.open("https://secure.acsevents.org/site/STR?fr_id=108592&pg=team&team_id=2739088", '_blank').focus();
    // navbarDonate.style.cursor = "url('pointer'), auto";
    // window.location.href='https://secure.acsevents.org/site/STR?fr_id=108592&pg=team&team_id=2739088';
});
