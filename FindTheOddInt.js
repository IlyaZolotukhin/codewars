//найти повторяющееся нечетное количество раз число
function findOdd(A) {
    for(let i = 0; i < A.length; i ++){
        let numCount = A.filter(item=> item === A[i]).length
        if (numCount % 2) {
            console.log(A[i])
            break
        }
    }
}

findOdd([3,3,3,2,3,2,2])