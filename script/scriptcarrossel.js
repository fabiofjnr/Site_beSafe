document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    function moveSlide(step) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        currentIndex = (currentIndex + step + totalSlides) % totalSlides;

        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));

    // Opcional: Adicionar navegação automática
    setInterval(() => moveSlide(1), 10000); // Muda o slide a cada 10 segundos
});

























