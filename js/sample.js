import {
    langDropdown,
    toggleMenu,
    sumbenuToggle,
    defaultLinks,
    currencyDropdown,
    closeSubmenu,
    titleSize
} from "./module.js";
window.langDropdown = langDropdown;
window.toggleMenu = toggleMenu;
window.sumbenuToggle = sumbenuToggle;
window.defaultLinks = defaultLinks;
defaultLinks();
window.currencyDropdown = currencyDropdown;
window.closeSubmenu = closeSubmenu;
window.titleSize = titleSize;
titleSize();

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
