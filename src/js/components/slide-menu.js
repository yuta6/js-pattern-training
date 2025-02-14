export const slideMenu = () => {
    const slideMenu = document.querySelector('[data-slide-menu]');
    const toggleButton = document.querySelector('[data-slide-menu-toggle]');
    const closeButton = document.querySelector('[data-slide-menu-close]');
    const overlay = document.querySelector('[data-slide-menu-overlay]');

    const openMenu = () => {
        slideMenu.classList.add('menu--active');
        overlay.classList.add('menu__overlay--active');
    };

    const closeMenu = () => {
        slideMenu.classList.remove('menu--active');
        overlay.classList.remove('menu__overlay--active');
    };

    toggleButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
};
