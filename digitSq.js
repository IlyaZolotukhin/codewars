function squareDigits(num){
    let string = num.toString();//переменная число в строку
    let results = []; //массив для хранения квадрата
    for (let i = 0; i < string.length; i++){ //перебираем цифры числа
        results[i] = string[i] * string[i]; //возводим числа в квадрат и сохраняем в массив
    }
    return Number(results.join('')); //результат соединяем и возвращаем
}