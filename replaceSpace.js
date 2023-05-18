function noSpace(x){//удалить пробелы из предложения
    //g ищет что между двух слэш(пробел) и replace на ''(пусто)
    return x.replace(/ /g,'');
}