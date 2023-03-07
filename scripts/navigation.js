//Selecting Elements
const navigationButton = document.querySelector('.menu-collapser');
const collapsedNavigationMenu = document.querySelector('.navigation-menu-collapse');
const pagesMenuButton = document.querySelector('.pages-menu-button');
const pagesMenuButtonCollapsed = document.querySelector('.pages-menu-button-collapse');
const pagesMenu = document.querySelector('.pages-menu');

//Menu states
let isMenuOpen = false;
let isPageMenuOpen = false;
let isPageMenuOpenCollapsed = false;

//Moves menu for navigation on small screen.
navigationButton.addEventListener('click', () => {
    if (isMenuOpen === false) {
        collapsedNavigationMenu.style.marginTop = '0px';
        isMenuOpen = true;
    } else {
        collapsedNavigationMenu.style.marginTop = '-150px';
        isMenuOpen = false;
        if (isPageMenuOpenCollapsed === true) {
            pagesMenuCollapsed.style.marginTop = '-150px';
            isPageMenuOpenCollapsed = false;
        }
    }
});

//Moves menu for pages tab.
pagesMenuButton.addEventListener('click', () => {
    if (isPageMenuOpen === false) {
        pagesMenu.style.marginTop = '0px';
        isPageMenuOpen = true;
    } else {
        pagesMenu.style.marginTop = '-150px';
        isPageMenuOpen = false;

    }
});

//Moves menu for pages tab on small screen.
pagesMenuButtonCollapsed.addEventListener('click', () => {
    if (isPageMenuOpenCollapsed === false) {
        pagesMenu.style.marginTop = '0px';
        isPageMenuOpenCollapsed = true;
    } else {
        pagesMenu.style.marginTop = '-150px';
        isPageMenuOpenCollapsed = false;
    }
});