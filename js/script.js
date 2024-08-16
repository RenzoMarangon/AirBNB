const links = document.querySelectorAll('.nav-link'); 
const menu = document.querySelector('.navbar-toggler-icon')

links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.click();
    });

});