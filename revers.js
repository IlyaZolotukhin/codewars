function solution(str){
    //создадим пустую строчную переменную
    let revers = '';
    //переберем с конца строки
    for (let i = str.length - 1; i >= 0; i--)
        //сложим буквы в обратном порядке
        revers += str[i];
    return revers;
}