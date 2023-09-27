//вывести сумму негативных чисел и количество позитивных чисел, ноль не учитывать
//пустой массив если ничего в аргументы не приходит
function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
        console.log( []);
    } else {
        input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    console.log([positiveNums , negativeNums]) ;
}

countPositivesSumNegatives([])