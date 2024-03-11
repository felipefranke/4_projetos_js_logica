// let pista = 100;
// let cadeiraSuperior = 200;
// let cadeiraInferior = 400;

// function comprar() {
//     let ingressoTipo = document.getElementById('tipo-ingresso').value;
//     let quantidade = document.getElementById('qtd').value;

//     // alert(ingressoTipo);
//     // alert(quantidade);

//     if (ingressoTipo === 'pista') {
//         let pistaDisponivel = document.getElementById('qtd-pista');
//         let ingressoPista = pista - quantidade;
//         pistaDisponivel.innerHTML = `${ingressoPista}`;
//     }
//     if (ingressoTipo === 'superior') {
//         let superiorDisponivel = document.getElementById('qtd-superior');
//         let ingressoSuperior = cadeiraSuperior - quantidade;
//         superiorDisponivel.innerHTML = `${ingressoSuperior}`;
//     }
//     if (ingressoTipo === 'inferior') {
//         let inferiorDisponivel = document.getElementById('qtd-inferior');
//         let ingressoSuperior = cadeiraInferior - quantidade;
//         inferiorDisponivel.innerHTML = `${ingressoSuperior}`;
//     }
// }


// Minha versão final:

// let estoque = {
//     pista: 100,
//     superior: 200,
//     inferior: 400
// };

// function comprar() {
//     let ingressoTipo = document.getElementById('tipo-ingresso').value;
//     let quantidade = parseInt(document.getElementById('qtd').value);

//     if (estoque.hasOwnProperty(ingressoTipo)) {
//         let estoqueDisponivel = estoque[ingressoTipo];
        
//         if (quantidade <= estoqueDisponivel) {
//             estoque[ingressoTipo] -= quantidade;
//             document.getElementById(`qtd-${ingressoTipo}`).innerHTML = `${estoque[ingressoTipo]}`;
//         } else {
//             alert(`Não há ingressos suficientes do tipo ${ingressoTipo} disponíveis.`);
//         }
//     } else {
//         alert(`Tipo de ingresso inválido: ${ingressoTipo}`);
//     }
// }

// versão dos professores:

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd < 0) {
        alert('Quantidade de ingressos inválida')
    }
    
    if (qtd > 0) {
        if (tipo.value == 'pista') {
            comprarPista(qtd);
        } else if (tipo.value == 'superior') {
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    } else {
        alert('Quantidade de ingressos inválida ')
    }
   
}

    
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}