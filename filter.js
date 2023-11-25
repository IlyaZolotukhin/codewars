//нужно отфильтровать первый массив по содержимому второго массива
function arrayDiff(a, b) {
    let res = a.filter((a) => !b.includes(a))
    console.log(res)

}

arrayDiff([1, 2, 3], [1, 2])