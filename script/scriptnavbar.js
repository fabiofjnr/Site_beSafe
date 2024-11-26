document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const linksHeader = document.querySelector('.links-header');

    menuToggle.addEventListener('click', function () {
        linksHeader.classList.toggle('show');
    });
});