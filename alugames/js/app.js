
let jogos = [document.getElementById('game-1'), document.getElementById('game-2'), document.getElementById('game-3')];

function alterarStatus(posicaoArray) {
    let jogo = jogos[posicaoArray - 1].querySelector('a');
    let jogoImg = jogos[posicaoArray - 1].querySelector('.dashboard__item__img');

    if (jogo) {
        jogo.classList.toggle('dashboard__item__button--return');
        jogo.textContent = jogo.classList.contains('dashboard__item__button--return') ? 'Devolver' : 'Alugar';
        jogoImg.classList.toggle('dashboard__item__img--rented');
    }
}
