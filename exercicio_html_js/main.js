document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('meuFormulario');
    const mensagem = document.getElementById('mensagem');

    formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

        if (campoB > campoA) {
            mensagem.textContent = "B é maior que A :)";
            mensagem.className = "mensagem valido";
        } else {
            mensagem.textContent = "A é maior que B :(";
            mensagem.className = "mensagem invalido";
        }
    });
});