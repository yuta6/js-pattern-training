document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('[data-dropdown-item]');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('is-active');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('is-active');
        });
    });
});
