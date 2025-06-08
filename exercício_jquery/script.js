$(document).ready(function() {
    // Ao submeter o formulário
    $('#taskForm').on('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário

        // Pega o valor do input
        const taskName = $('#taskInput').val().trim();

        if (taskName !== '') {
            // Cria um novo elemento <li> e adiciona na lista
            $('#taskList').append('<li>' + taskName + '</li>');

            // Limpa o campo de input
            $('#taskInput').val('');
        }
    });

    // Ao clicar em um item da lista, alterna a classe 'completed'
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});