let listaDeAmigos = [];

function adicionar() {
    let exibirLista = document.getElementById('lista-amigos');
    let nomeDoAmigoInput = document.getElementById('nome-amigo');
    let nomeDoAmigo = nomeDoAmigoInput.value.trim();

    if (listaDeAmigos.includes(nomeDoAmigo) || nomeDoAmigo == '') {
        alert('Escolha outro nome');
        nomeDoAmigoInput.value = '';
        nomeDoAmigoInput.focus();
    }else {
        listaDeAmigos.push(nomeDoAmigo);
        let listaAtual = listaDeAmigos.join(', ');
        exibirLista.textContent = listaAtual;
        nomeDoAmigoInput.value = '';
        nomeDoAmigoInput.focus();
    }
}


function sortear() {
    if (listaDeAmigos.length < 2){
        alert('Adicione mais amigos')
        }else
        embaralhar(listaDeAmigos);
        let sorteio = document.getElementById('lista-sorteio');
        sorteio.innerHTML = '';

        for (let i = 0; i < listaDeAmigos.length; i++) {
            if (i == listaDeAmigos.length - 1) {
                sorteio.innerHTML += listaDeAmigos[i] + ' --> ' + listaDeAmigos[0] + '<br>';
            } else {
                sorteio.innerHTML += listaDeAmigos[i] + ' --> ' + listaDeAmigos[i + 1] + '<br>';
            }
        }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
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
