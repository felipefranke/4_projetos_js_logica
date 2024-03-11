//1 - Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.

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

function excluirAmigo(index) {
    listaDeAmigosamigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
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

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}



//2 - Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

let lista1 = [1,2,3];
let lista2 = [4,5,6];
novaLista = [];

function concatenar (lista1, lista2) {
let novaLista = lista1.concat(lista2);
console.log(novaLista);
}



//3 - Remova o último elemento de novaLista. Imprima novaLista após a remoção.

function removerElemento () {
    novaLista.pop();
    console.log(novaLista)
}

//4 - Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  // Embaralhando novaLista
novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);


//5 - Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.


// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);
  