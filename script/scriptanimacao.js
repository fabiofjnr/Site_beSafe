document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.home-section, .resumo, .blocks-section, .faq-section, .baixe-section, .objetivo');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe visível à seção que está na vista
            } else {
                entry.target.classList.remove('visible'); // Remove a classe se não estiver na vista
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observa cada seção
    });
});
