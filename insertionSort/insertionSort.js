function insertionSort(lista) {
    for (let item = 0; item < lista.length; item++) {
        let itemAtual = item;
        while(itemAtual > 0 && lista[itemAtual] < lista[itemAtual - 1]){
            let atualMenor = lista[itemAtual];
            let atualMaior = lista[itemAtual - 1];

            lista[itemAtual] = atualMaior;
            lista[itemAtual - 1] = atualMenor;

            itemAtual--;
        }        
    }
}

export default insertionSort;