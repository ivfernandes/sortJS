const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, valor, inicio, fim) {
    const pos = Math.floor((inicio + fim)/2);

    if (inicio > fim) return -1;

    if (array[pos] === valor) return pos;

    else if (array[pos] > valor) return binarySearch(array, valor, inicio, pos - 1);

    else return binarySearch(array, valor, pos + 1, fim);
        
}

export default binarySearch;