let listaDeAmigos = [];

function adicionar() {
    let exibirLista = document.getElementById('lista-amigos');
    let nomeDoAmigoInput = document.getElementById('nome-amigo');
    let nomeDoAmigo = nomeDoAmigoInput.value.trim();

    if(nomeDoAmigo) {
        listaDeAmigos.push(nomeDoAmigo);
        let listaAtual = listaDeAmigos.join(', ');
        exibirLista.textContent = listaAtual;
        nomeDoAmigoInput.value = '';
        nomeDoAmigoInput.focus();
    }
}


function sortear() {
    let listaEmbaralhada = listaDeAmigos.slice();
    
    for (let i = listaEmbaralhada - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * (i + 1))
    }
}




function reiniciar() {
    listaDeAmigos = [];
    // sorteados = [];
}


// Versão dos professores:

// function adicionar() {
//     let amigo = document.getElementById('nome-amigo');
//     let lista = document.getElementById('lista-amigos');
//     if (lista.textContent == '') {
//         lista.textContent = amigo.value;
//     } else {
//         lista.textContent = lista.textContent + ', ' + amigo.value;
//     }
//     amigo.value = '';
// }
