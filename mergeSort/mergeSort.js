function insereOrdenado(inicio, fim){
    let indiceInicio = 0;
    let indiceFim = 0;
    const resultado = [];
    
    while (indiceInicio < inicio.length && indiceFim < fim.length) {
        if (inicio[indiceInicio] < fim[indiceFim]) {
            resultado.push(inicio[indiceInicio]);
            indiceInicio++;
        } else {
            resultado.push(fim[indiceFim]);
            indiceFim++;
        }
    }

    return resultado.concat(
        indiceInicio < inicio.length ? inicio.slice(indiceInicio) : fim.slice(indiceFim)
    );
}


function mergeSort(array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const array1 = mergeSort(array.slice(0, meio));
        const array2 = mergeSort(array.slice(meio));
        array = insereOrdenado(array1, array2);
    }
    return array;
}