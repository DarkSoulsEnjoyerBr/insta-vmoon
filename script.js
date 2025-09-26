document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.gallery-tabs .tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove a classe 'active' de todas as abas
            tabs.forEach(item => item.classList.remove('active'));

            // Adiciona a classe 'active' à aba clicada
            e.currentTarget.classList.add('active');
        });
    });
});