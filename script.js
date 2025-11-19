let carrinho = [];
let totalCarrinho = 0;

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    totalCarrinho += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalElement = document.getElementById('totalCarrinho');

    itensCarrinho.innerHTML = '';  // Limpar itens antigos

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });

    totalElement.textContent = totalCarrinho.toFixed(2);
}

function validarFormulario() {
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    if (!validarEmail(email)) {
        alert('Email inválido!');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('CPF inválido!');
        return false;
    }

    if (!validarTelefone(telefone)) {
        alert('Telefone inválido!');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

function validarTelefone(telefone) {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
}
