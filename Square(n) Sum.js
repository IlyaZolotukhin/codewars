function squareSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i] ** 2;
    }
    console.log(sum);
}

squareSum([1,2])