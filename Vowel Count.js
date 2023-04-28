function getCount(str) {
    //переменная счет
    let count = 0;
//гласные буквы которые будем считать в словах
    let words = 'aeiou'.split('');
//переберем буквы в словах
    for (let i = 0; i < str.length; i++) {
        //переберем наши гласные
        for (let j = 0; j < words.length; j++) {
            //сравним наши буки
            if (str[i] === words [j]) {
                //если совпали то складываем
                count++;
            }

        }
    }
    return count;
}