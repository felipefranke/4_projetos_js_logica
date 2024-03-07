
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

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    // let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    // alert(nomeJogo.textContent);


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'
    }else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    }
}