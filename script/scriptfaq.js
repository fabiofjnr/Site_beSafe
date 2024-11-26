document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const resposta = question.nextElementSibling;
        const icon = question.querySelector('.dropdown-icon');
        resposta.classList.toggle('show');
        icon.classList.toggle('rotated');
    });
});
