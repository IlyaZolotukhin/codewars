//Нужно в массиве показать обратный отсчет от числа n
const reverseSeq = n => {
    //создал массив
    let array = [];
    //посчитал от n до 0 и каждую i запушил в массив
    for(let i = n; i > 0; i--){
        array.push(i);
    }
    //как цикл закончился вернул массив
    return array;
};