// let totalGeral = 0;
// document.getElementById('lista-produtos').innerHTML = '';
// document.getElementById('valor-total').innerHTML = 0;

// function adicionar() {
// // recuperar info (nome, quantidade e valor)
// let produto = document.getElementById('produto').value;
// let nomeDoProduto = produto.split('-')[0];
// let valorUnitario = produto.split('R$')[1];
// let quantidade = document.getElementById('quantidade').value;

// // calcular o subtotal (valor unitário * quantidade)
// let preco = quantidade * valorUnitario;

// // adicionar ao carrinho carrinho.innerHTML += é igual a " carrinho.innerHTML = carrinho.innerHTML + ... "
// let carrinho = document.getElementById('lista-produtos');
// carrinho.innerHTML += `<section class="carrinho__produtos__produto">
// <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
// </section>`


// // atualizar valor total
// totalGeral = totalGeral + preco;
// let campoTotal = document.getElementById('valor-total');
// campoTotal.textContent = `R$ ${totalGeral}`;

// document.getElementById('quantidade').value = '';

// }
// function limpar() {
//     totalGeral = 0;
//     document.getElementById('lista-produtos').innerHTML = '';
//     document.getElementById('valor-total').innerHTML = 0;
// }


// Desafios

// 1 - Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.

let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 0;

function adicionar() {
// recuperar info (nome, quantidade e valor)
let produto = document.getElementById('produto').value;
let nomeDoProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

// obrigatoriedade da quantidade
if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, informe a quantidade');
    return;
}

// calcular o subtotal (valor unitário * quantidade)
let preco = quantidade * valorUnitario;

// adicionar ao carrinho carrinho.innerHTML += é igual a " carrinho.innerHTML = carrinho.innerHTML + ... "
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML += `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
</section>`


// atualizar valor total
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;

document.getElementById('quantidade').value = '';

}
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 0;
}


// 2 - Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

// 3 - Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

// 4 - Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

// 5 - Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

// 6 - Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.