//узнать являеться ли квадрат правильным

let isSquare = function(n){
    //возводим в квадрат и если делиться без остатка
    return Math.sqrt(n) % 1 === 0;
}