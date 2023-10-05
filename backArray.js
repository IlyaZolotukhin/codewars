//даны числа их нужно перевернуть в обратном порядке в массиве
function digitize(n) {
    let arr = String(n).split("").reverse().map(Number);
    console.log(arr);
}


digitize(35231)

