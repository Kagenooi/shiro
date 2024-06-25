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

function setAdaptiveSize() {
    const adaptive = document.querySelector('#adaptive');
    let adaptiveZoom = adaptive.style.zoom;
    adaptive.style.height = document.documentElement.clientHeight / adaptiveZoom + 'px';
    if (document.body.clientWidth > 980) {
        document.querySelector('.header__title').style.padding = `${document.documentElement.clientHeight / adaptiveZoom / 100 * 25}px 0 0`;
    }
}
setAdaptiveSize();


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

function title() {
    if (document.querySelector('.header__title').clientWidth > 375) {
        document.querySelector('.header__title').style.cssText = `
            font-size: 24px;
        `;
    }
}
title();