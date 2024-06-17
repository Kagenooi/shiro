export function langDropdown(thisBtn, dropdown) {
    document.querySelector(`${thisBtn}`).classList.toggle('active');
    document.querySelector(`${dropdown}`).classList.toggle('active');
    if (document.querySelector(`${dropdown}`).style.maxHeight) {
        document.querySelector(`${dropdown}`).style.maxHeight = null;
    } else {
        document.querySelector(`${dropdown}`).style.maxHeight = document.querySelector(`${dropdown}`).style.maxHeight + document.querySelector(`${dropdown}`).scrollHeight + 'px';
    }
}

export function toggleMenu(event, btn) {
    const menu = document.querySelectorAll(`${event}`);
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle('active');
    }
    if (btn) {
        btn.classList.toggle('active');
    }
    document.querySelector('.left').classList.remove('mobile');

    const submenu = document.querySelectorAll('.submenu');
    for (let i = 0; i < submenu.length; i++) {
        submenu[i].classList.remove('active');
    }

    const btns = document.querySelectorAll('.toggleSubmenu');
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
}

export function sumbenuToggle(btn) {
    const btns = document.querySelectorAll('.toggleSubmenu');
    const submenu = document.querySelectorAll('.submenu');

    for (let i = 0; i < submenu.length; i++) {
        btns[i].classList.remove('active');
        submenu[i].classList.remove('active');

        if (document.body.clientWidth < 980) {
            submenu[i].classList.remove('mobile');
        }
        let links = submenu[i].querySelectorAll('.submenu__link');
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
        }
    }
    document.querySelector(`#${btn.dataset.submenu}`).style.backgroundImage = `url("${document.querySelector(`#${btn.dataset.submenu}`).dataset.bg}")`
    document.querySelector(`#${btn.dataset.submenu}`).classList.add('active');
    if (document.body.clientWidth < 980) {
        document.querySelector(`#${btn.dataset.submenu}`).parentElement.classList.add('mobile');
    }
    btn.classList.add('active');

    let index = 0;
    let links = document.querySelectorAll(`#${btn.dataset.submenu} .submenu__link`);

    const allLinks = document.querySelectorAll(`.submenu__link`);
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.remove('active');
    }
    btn.removeAttribute('onclick');
    let interval = setInterval(() => {
        if (index >= links.length) {
            clearInterval(interval);
            index = 0;
        }

        links[index].classList.add('active');
        index = index + 1;

        btn.setAttribute('onclick', 'sumbenuToggle(this)')
    }, 100);
}

export function defaultLinks() {
    let links = document.querySelectorAll('.toggleSubmenu');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
        })
    }
}


export function titleSize() {
    const title = document.querySelector('.resize');
    if (title) {
        if (title.clientWidth > 1200) {
            title.classList.add('small');
        }
    }
}


export function currencyDropdown(btn, dropdown) {
    btn.classList.toggle('active');
    document.querySelector(`${dropdown}`).classList.toggle('active');
    if (document.querySelector(`${dropdown}`).style.maxHeight) {
        document.querySelector(`${dropdown}`).style.maxHeight = null;
    } else {
        document.querySelector(`${dropdown}`).style.maxHeight = document.querySelector(`${dropdown}`).style.maxHeight + document.querySelector(`${dropdown}`).scrollHeight + 'px';
    }
}


export function closeSubmenu(sub) {
    document.querySelector(`#${sub}`).classList.remove('active');
    document.querySelector(`.left`).classList.remove('mobile');
    document.querySelector(`.left`).classList.remove('active');

    const btns = document.querySelectorAll('.toggleSubmenu');
    const submenu = document.querySelectorAll('.submenu');

    for (let i = 0; i < submenu.length; i++) {
        btns[i].classList.remove('active');
        submenu[i].classList.remove('active');

        if (document.body.clientWidth < 980) {
            submenu[i].classList.remove('mobile');
        }
        let links = submenu[i].querySelectorAll('.submenu__link');
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
        }
    }

    const allLinks = document.querySelectorAll(`.submenu__link`);
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.remove('active');
    }
}


export function questionForm() {
    document.querySelector('#questionForm').classList.toggle('active');
}