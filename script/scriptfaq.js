document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const resposta = question.nextElementSibling;
        const icon = question.querySelector('.dropdown-icon');

        // Alternar a visibilidade da resposta
        resposta.classList.toggle('show');

        // Alternar a rotação da seta
        icon.classList.toggle('rotated');
    });
});
