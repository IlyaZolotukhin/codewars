//дан массив слов, необходимо соединить через пробел
//в начале и конце предложения пробелов быть не должно

function smash (words) {
    //join соединяем, trim убираем пробелы с начала и конца
    return words.join(" ").trim()
};