
function trocaPosicao(array, posicaoMenor, posicaoMaior) {
    const aux = array[posicaoMenor];
    array[posicaoMenor] = array[posicaoMaior];
    array[posicaoMaior] = aux;
}

function valoresMenores(array, elemento) {
    let qtdValores = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < elemento) {
            qtdValores++;
        }
    }
    return qtdValores;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;
    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda] < pivo) {
            atualEsquerda++;
        }
        while (array[atualDireita] > pivo) {
            atualDireita--;
        }
        if (atualEsquerda <= atualDireita) {
            trocaPosicao(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual -1) {
            quickSort(array, esquerda, indiceAtual -1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
}

export default quickSort;