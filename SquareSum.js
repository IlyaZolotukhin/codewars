function squareSum(numbers){
    let sum = 0;
    //переберем все числа
    for(let i=0; i<numbers.length; i++){
        //все числа возведем в квадрат и сложим
        sum += numbers[i] ** 2;
    }
    return sum;
}
