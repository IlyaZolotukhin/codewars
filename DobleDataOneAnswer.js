//вывести из массива пары чисел нужное слово
function openOrSenior(data){

    let age = data.map(d => d[0] >=55 && d[1] > 7 ? "Senior":"Open")
    console.log(age)
}


openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
