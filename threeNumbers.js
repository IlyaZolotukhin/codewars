//даны три значения, начальня цифра сложения , конечная цифра  и шаг сложения
//нужно вывести результат
const sequenceSum = (begin, end, step) => {
    if(begin > end) return 0
let res = 0
    for(let i = begin; i <= end; i+=step){
        console.log(i)
        res += i


    }
    console.log("res:"+res)

};

sequenceSum (2 ,6, 2)