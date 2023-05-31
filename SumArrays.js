function sum (numbers) {
    "use strict";
    //создаем переменую для суммы чисел
    let sum = 0;
    //извлекем каждое число из массива
    for (let i =0; i < numbers.length; i++) {
        //сложим числа
        sum += numbers[i];
    }
    return sum;

};

