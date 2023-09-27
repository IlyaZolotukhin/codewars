//четное число выведет false, и напротив
function lovefunc(flower1, flower2){
    let number = flower1 + flower2
    if(number % 2 === 0){
        console.log(false)
    }else{
        console.log(true)
    }
}

lovefunc(5, 2)