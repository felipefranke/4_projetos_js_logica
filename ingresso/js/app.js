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

let estoque = {
    pista: 100,
    superior: 200,
    inferior: 400
};

function comprar() {
    let ingressoTipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (estoque.hasOwnProperty(ingressoTipo)) {
        let estoqueDisponivel = estoque[ingressoTipo];
        
        if (quantidade <= estoqueDisponivel) {
            estoque[ingressoTipo] -= quantidade;
            document.getElementById(`qtd-${ingressoTipo}`).innerHTML = `${estoque[ingressoTipo]}`;
        } else {
            alert(`Não há ingressos suficientes do tipo ${ingressoTipo} disponíveis.`);
        }
    } else {
        alert(`Tipo de ingresso inválido: ${ingressoTipo}`);
    }
}