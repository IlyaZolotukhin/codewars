function isPangram(string){
    //преобразуем наше предложение в строчные буквы
    let stringArr = string.toLowerCase();
    //создадим массив букв разделенных""
    let words = 'abcdefghijklmnopqrstuvwxyz'.split('');
//будем перебирать все буквы из массива
    for (let i = 0; i < words.length; i++) {
        //если буква из предложения не совпадает с буквоой
        // в массиве то indexOf выдаст -1
        if(stringArr.indexOf(words[i]) < 0){
            return false;
        }
    }
    return true;
}