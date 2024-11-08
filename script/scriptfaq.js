document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const resposta = question.nextElementSibling;
        resposta.classList.toggle('show');
    });
});
