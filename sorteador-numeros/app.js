// function sortear() {
//     let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
//     let numeroInicial = parseInt(document.getElementById('de').value);
//     let numeroFinal = parseInt(document.getElementById('ate').value);
    
//     let sorteados = [];
//     let numero;

//     for (i = 0; i < quantidadeDeNumeros; i++) {
        
//         do{
//             numero = obterNumeroAleatorio(numeroInicial, numeroFinal);
//         } while (sorteados.includes(numero));
        
//         sorteados.push(numero);
            
//     }
    
//     let resultado = document.getElementById('resultado');
//     resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label> `;
//     alterarStatusBotao ();
// }


// function obterNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }


//     function alterarStatusBotao() {
//         let botao = document.getElementById('btn-reiniciar');
        
//         if (botao.classList.contains('container__botao-desabilitado')) {
        
//         botao.classList.remove('container__botao-desabilitado');
//         botao.classList.add('container__botao');
//     } else {
//         botao.classList.remove('container__botao');
//         botao.classList.add('container__botao-desabilitado');
//     }
// }

        
// function reiniciar() {
//     document.getElementById('quantidade').value = '';
//     document.getElementById('de').value = '';
//     document.getElementById('ate').value = '';
//     document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
//     alterarStatusBotao();
// }


// Cache dos elementos DOM
const quantidadeInput = document.getElementById('quantidade');
const deInput = document.getElementById('de');
const ateInput = document.getElementById('ate');
const resultado = document.getElementById('resultado');
const botao = document.getElementById('btn-reiniciar');

// Função principal
function sortear() {
    const quantidadeDeNumeros = parseInt(quantidadeInput.value);
    const numeroInicial = parseInt(deInput.value);
    const numeroFinal = parseInt(ateInput.value);
    
    const sorteados = new Set();
    let numero;

    while (sorteados.size < quantidadeDeNumeros) {
        numero = obterNumeroAleatorio(numeroInicial, numeroFinal);
        sorteados.add(numero);
    }
    
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${[...sorteados]}</label>`;
    alterarStatusBotao();
}

// Função para obter número aleatório
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status do botão
function alterarStatusBotao() {
    botao.classList.toggle('container__botao-desabilitado', botao.classList.contains('container__botao'));
    botao.classList.toggle('container__botao', !botao.classList.contains('container__botao'));
}

// Função para reiniciar
function reiniciar() {
    quantidadeInput.value = '';
    deInput.value = '';
    ateInput.value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
