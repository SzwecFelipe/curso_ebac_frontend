document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para fazer a validação

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! Campo B é maior que o Campo A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido! O Campo B deve ser maior que o Campo A.';
        mensagem.style.color = 'red';
    }
});
