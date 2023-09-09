/*если следущее число не последовательное, т.е. не больше на единицу, вернуть его*/
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            console.log(arr[i]);
        }
    }

    console.log("null"); // Если все элементы в массиве последовательны, то возвращаем null
}

firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12])