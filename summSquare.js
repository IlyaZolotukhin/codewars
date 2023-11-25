function sumDigPow(a, b) {
    var array = [];
    while(a <= b){
        if(a.toString().split('').reduce((x,y,i)=>x + y ** (i + 1),0) == a)
            ans.push(a);
        a++;
    }
    console.log(array) ;
}

sumDigPow(1, 100)