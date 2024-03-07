
// Minha solução

// let jogos = [document.getElementById('game-1'), document.getElementById('game-2'), document.getElementById('game-3')];

// function alterarStatus(posicaoArray) {
//     let jogo = jogos[posicaoArray - 1].querySelector('a');
//     let jogoImg = jogos[posicaoArray - 1].querySelector('.dashboard__item__img');

//     if (jogo) {
//         jogo.classList.toggle('dashboard__item__button--return');
//         jogo.textContent = jogo.classList.contains('dashboard__item__button--return') ? 'Devolver' : 'Alugar';
//         jogoImg.classList.toggle('dashboard__item__img--rented');
//     }
// }



// versão dos instrutores

// function alterarStatus(id) {
//     let jogoClicado = document.getElementById(`game-${id}`);
//     let imagem = jogoClicado.querySelector('.dashboard__item__img');
//     let botao = jogoClicado.querySelector('.dashboard__item__button');
//     // let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

//     // alert(nomeJogo.textContent);


//     if (imagem.classList.contains('dashboard__item__img--rented')) {
//         imagem.classList.remove('dashboard__item__img--rented');
//         botao.classList.remove('dashboard__item__button--return');
//         botao.textContent = 'Alugar'
//     }else {
//         imagem.classList.add('dashboard__item__img--rented')
//         botao.classList.add('dashboard__item__button--return');
//         botao.textContent = 'Devolver'
//     }
// }

// versão otimizada

// function alterarStatus(id) {
//     let jogoClicado = document.getElementById(`game-${id}`);
//     let imagem = jogoClicado.querySelector('.dashboard__item__img');
//     let botao = jogoClicado.querySelector('.dashboard__item__button');

//     if (jogoClicado) {
//         imagem.classList.toggle('dashboard__item__img--rented');
//         botao.classList.toggle('dashboard__item__button--return');
//         botao.textContent = botao.classList.contains('dashboard__item__button--return') ? 'Devolver' : 'Alugar';
//     }
// }


// Desafio :
// 1 - No projeto Alugames, implemente uma confirmação de devolução.
// 2 - No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
// 3 - Crie um programa que verifica se uma palavra ou frase é um palíndromo.
// 4 - Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

let jogosAlugados = 0

function contagemdeJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = jogoClicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')) {
        alert(`${nomeDoJogo.textContent} devolvido com sucesso`)
        jogosAlugados--;
    } else {
        alert(`${nomeDoJogo.textContent} alugado com sucesso, devolva quanto terminar de jogar para que mais pessoas possam aproveitar`)
        jogosAlugados++;
    }
    if (jogoClicado) {
        imagem.classList.toggle('dashboard__item__img--rented');
        botao.classList.toggle('dashboard__item__button--return');
        botao.textContent = botao.classList.contains('dashboard__item__button--return') ? 'Devolver' : 'Alugar';
    }
    contagemdeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contagemdeJogosAlugados();
})