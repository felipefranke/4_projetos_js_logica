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
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


