/* Selecionando os elementos */
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__list li');

function initNavbar() {
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Alterna a classe 'active' no menu e na lista
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Animação dos links (opcional)
            animateLinks();
        });
    }
}

function animateLinks() {
    navLinks.forEach((link, index) => {
        // Se a animação já existir, nós a removemos; se não, adicionamos
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            // Cria um efeito cascata (um link entra após o outro)
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
}

// Inicia a função
initNavbar();