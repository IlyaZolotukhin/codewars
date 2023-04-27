function findNextSquare(sq) {
    //первая переменная из кв. корня
    let root1;
    //вторая переменная из кв. корня
    let nextroot;
    //из кв.корня без остатка
    if(Math.sqrt(sq)%1 ===0){
        root1=Math.sqrt(sq);
        //следующая проверка на единицу больше
        nextroot=root1+1;
    }else{
        return -1;
    }
    return nextroot*nextroot;
}