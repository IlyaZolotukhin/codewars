function disemvowel(str) {
    // создаем новую переменную
    let newStr = "";
// перебираем строку
    for (let i = 0; i < str.length; i++) {
        //если в ней находим гласные, то дальше перебираем
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        //а согласные складываем др за др
        newStr += str[i];
    }
    //выводим когда закончиться строка
    return newStr;
}