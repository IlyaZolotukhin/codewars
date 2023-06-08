function descendingOrder(n) {
    //преобразуем n в строку и разделим цифры на массив строк
    let num = n.toString().split('');
    //сортируем в порядке убывания при помощи .sort((a, b) => b - a)
    //объединим элементы массива в строку .join('')
    let descendingNumber = num.sort((a, b) => b - a).join('');
// добавим parseInt для преобразования обратно в число
    return parseInt(descendingNumber);
}

