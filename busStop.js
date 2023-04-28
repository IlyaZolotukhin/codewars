let number = function(busStops){
    //переменные для хранения количества входящих и выходящих
    let In = 0;
    let Out = 0;
    //перебираем  входящтих и выходящих людей
    for (let i=0; i<busStops.length; i++) {
        //у входящих 0 номер в массиве
        In += busStops[i][0];
        //у выходящих первый
        Out += busStops[i][1];
    }
    return In - Out;
}