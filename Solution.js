function solution(number){
    //переменнная для нхранения суммы
    let sum = 0;
    //переберем от 0 до вход. числа
for (let i = 0; i < number; i ++) {
    //кратное 3,прибавим его к сумме и продолжим
    if (i % 3 == 0) {
        sum += i;
        continue;
    }
    //найдем кратное 7 прибавим и продолжим
    else if (i % 5 == 0) {
        sum += i;
        continue;
    }
    else{
        //не подходит число возрашаем в вверх цикла
        continue;
    }
}
//возвр. сумму
return sum;
}