document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.home-section, .resumo, .blocks-section, .faq-section, .baixe-section, .objetivo');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); 
    });
});
