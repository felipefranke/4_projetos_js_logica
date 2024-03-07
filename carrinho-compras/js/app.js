let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 0;

function adicionar() {
// recuperar info (nome, quantidade e valor)
let produto = document.getElementById('produto').value;
let nomeDoProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

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