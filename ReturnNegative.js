//сделать число отрицательным
function makeNegative(num) {
    //если уже отрицательное, его и возвращаем
    if (num<0){
        return num;
    }else {
        //превращаем положительное в отрицательное
        return -Math.abs(num);
    }
}