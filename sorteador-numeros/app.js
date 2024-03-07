function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    for (i = 0; i < quantidadeDeNumeros; i++) {
        
        do{
            numero = obterNumeroAleatorio(numeroInicial, numeroFinal);
        } while (sorteados.includes(numero));
        
        sorteados.push(numero);
            
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label> `;
    alterarStatusBotao ();
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


    function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
        
        if (botao.classList.contains('container__botao-desabilitado')) {
        
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

        
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}