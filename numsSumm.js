//проссумировать все числа которее входят в промежуток до цифры num

var summation = function (num) {
    let j = 0;
    for (let i =0; i <= num; i++){
            j+=i
    }
    console.log("res: "+j)
}

summation(1)
