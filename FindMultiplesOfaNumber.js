//нужно передать числа в массив от integer до limit, с шагом integer
function findMultiples(integer, limit) {
    let cnt = 1
    let arr = []
    let el = integer;
    while (limit >= el) {
        arr.push(el)
        cnt++
        el = cnt * integer
    }
    return arr
}

console.log(findMultiples(4, 27))