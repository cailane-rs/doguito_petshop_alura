const dataNascimento = document.querySelector('#nascimento');

                            //'blu' é quando input perde o foco.
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target);
})

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if (!maiorQue18(dataRecebida)) {
        mensagem = "Você deve ter pelo menos 18 anos para se cadastrar.";
    }

    input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;
}