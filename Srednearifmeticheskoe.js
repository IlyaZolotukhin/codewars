function findAverage(array) {
    //есть условие что массив больше нуля
    if (array.length > 0) {
    let sum = 0;// храним сумму чисел
    for (let i =0; i < array.length; i++) {
        sum += array[i];//сложим каждую цифру
    }
    return sum/array.length;//посчитаем среднеарифметическое
    }else {
        return 0;
    }

}