function solution(str){
    let string = str.toString();
    //создадим пустую строчную переменную
    let revers = '';
    //переберем с конца строки
    for (let i = string.length - 1; i >= 0; i--)
        //сложим буквы в обратном порядке
        revers += string[i];
    console.log(revers);
}

solution(987541)