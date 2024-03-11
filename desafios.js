// 1 - Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd < 0) {
            alert('Quantidade de ingressos inválida')
    }

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}


// 2 - Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

function quantidade(valorString) {
    return parseInt(valorString);
}

let valorinteiro = quantidade(valorString);



// 3 - Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.



function calcular(operacao, numero1, numero2) {
    if (operacao === 'adicao') {
        somar (numero1, numero2);
    } else if (operacao === 'subtracao') {
        subtrair (numero1, numero2);
    } else if (operacao === 'multiplicacao') {
        multiplicar (numero1, numero2);
    } else {
        dividir (numero1, numero2);
    }
}


function somar (numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log(resultado);
}

function subtrair (numero1, numero2) {
    let resultado = numero1 - numero2;
    console.log(resultado);
}

function multiplicar (numero1, numero2) {
    let resultado = numero1 * numero2;
    console.log(resultado);
}

function dividir (numero1, numero2) {
    
    if (numero2 === 0) {
        console.log('Não é possível dividir por zero')
    } else {
    let resultado = numero1 / numero2;
    console.log(resultado);
    }
}


//4 - Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
let numero = 0;

function parOuImpar (numero) {
    if (numero % 2 === 0) {
        alert(`${numero} é par`);
    } else {
        alert(`${numero} é impar`);
    }
}


//5 -  Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

function converter (para, temperatura) {
    if (para.toLowerCase() === 'celsius') {
    let celsius = parseInt((temperatura - 32) * (5 / 9));
    console.log(`${para} Fahrenheit é igual a ${celsius} Celsius`);
    } else if (para.toLowerCase() === 'fahrenheit') {
        let fahrenheit = parseInt((temperatura * (19 / 2)) + 32);
    console.log(`${para} Celsius é igual a ${fahrenheit} Fahrenheit`);
    } else {
        return "Escala inválida"
    }
}