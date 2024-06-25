import {
    langDropdown,
    toggleMenu,
    sumbenuToggle,
    defaultLinks,
    currencyDropdown,
    closeSubmenu,
} from "./module.js";
window.langDropdown = langDropdown;
window.toggleMenu = toggleMenu;
window.sumbenuToggle = sumbenuToggle;
window.defaultLinks = defaultLinks;
defaultLinks();
window.currencyDropdown = currencyDropdown;
window.closeSubmenu = closeSubmenu;

import {
    adaptive
} from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive() });

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        this.document.querySelector('.navbar').classList.add('active');
    } else {
        this.document.querySelector('.navbar').classList.remove('active');
    }
})


document.documentElement.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar__lang')) {
        document.querySelector('#langDropdown').classList.remove('active');
        document.querySelector('.navbar__lang_btn').classList.remove('active');
        document.querySelector('#langDropdown').style.maxHeight = null;
    }
    if (!event.target.closest('.navbar__currency')) {
        document.querySelector('#currency').classList.remove('active');
        document.querySelector('.navbar__currency_btn').classList.remove('active');
        document.querySelector('#currency').style.maxHeight = null;
    }
})